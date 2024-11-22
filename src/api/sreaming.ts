import { filter, first, Observable, ReplaySubject, Subject } from "rxjs";

export class StreamingSubscription<T> {
  context: string;
  subject: ReplaySubject<T>;
  constructor(context: string, size: number = 1) {
    this.context = context;
    this.subject = new ReplaySubject<T>(size);
  }
}

export class StreamingMessage<T> {
  correlationId: string;
  data: T;
}

export class StreamingClient {
  socket: WebSocket;
  subscriptions: Map<string, StreamingSubscription<any>> = new Map();
  messages: Subject<StreamingMessage<any>> = new Subject();

  public connect(token: string) {
    this.socket = new WebSocket(`ws://localhost:9090/ws?token=${token}`);

    this.socket.onopen = () => {
      console.log("connected to streaming server", this.subscriptions.keys());
      this.socket.send(JSON.stringify({ method: "subscribe", contexts: this.subscriptions.keys() }));
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const subscription = this.subscriptions.get(data.context);
      if (subscription) {
        subscription.subject.next(data.data);
      }
    };
  }

  public disconnect() {
    this.socket.close();
  }

  public subscribe(context: string, ttl?: number): StreamingSubscription<any> {
    const subscription = new StreamingSubscription(context, 1);
    this.subscriptions.set(context, subscription);
    if (ttl) {
      setTimeout(() => {
        this.unsubscribe(context);
      }, ttl);
    }
    return subscription;
  }

  public unsubscribe(context: string) {
    this.socket.send(JSON.stringify({ method: "unsubscribe", contexts: [context] }));
    this.subscriptions.delete(context);
  }

  public rpc<T, R>(t: string, msg: StreamingMessage<T>, timeoutDuration: number = 5000): Observable<StreamingMessage<R>> {
    const subject = new Subject<StreamingMessage<R>>();
    msg.correlationId = crypto.randomUUID();
    // console.log("rpc", t, msg);
    this.messages
      .pipe(
        filter((message) => msg.correlationId === message.correlationId),
        // timeout(timeoutDuration),
        // catchError((err) => {
        //   console.log("RPC timeout", err);
        //   subject.error(new Error(`Request timed out, please contact support.`));
        //   return throwError(() => err);
        // }),
        first()
      )
      .subscribe((message) => {
        // this.logger.debug("rpc.reply", message);
        subject.next(message as unknown as StreamingMessage<R>);
        subject.complete();
      });
    this.socket.send(JSON.stringify(msg));
    return subject;
  }
}

export const streamingClient = new StreamingClient();
