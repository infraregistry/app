import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { delay, Observable, of, ReplaySubject, tap } from "rxjs";

class Session {
  public token: string = $state("");
  private intervalId: NodeJS.Timeout | undefined;

  public isLoggedIn: boolean = $state(false);
  public status: ReplaySubject<boolean> = new ReplaySubject(1);

  public init() {
    const storedToken = localStorage.getItem("session");
    if (storedToken) {
      this.isLoggedIn = true;
      // this.status.next(this.isExpired());
    }
  }

  public getToken(): string {
    return localStorage.getItem("session")!;
  }

  private isExpired = () => {
    if (!this.token) return true;
    try {
      const decodedToken = jwtDecode(this.token);
      const expiration = dayjs(decodedToken.exp! * 1000);
      if (!expiration.isValid()) return true;

      return dayjs().isAfter(expiration);
    } catch (e) {
      return true;
    }
  };

  public startExpirationCheck() {
    this.stopExpirationCheck();
    this.intervalId = setInterval(() => {
      const isExpired = this.isExpired();
      if (isExpired) {
        console.log("session expired");

        this.token = "";
        this.isLoggedIn = false;
        localStorage.removeItem("session");
        this.stopExpirationCheck();
      }
    }, 5000);
  }

  public stopExpirationCheck() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public login(email: string, password: string): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(() => {
        this.register(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5OTk5OTk5OTl9.0OKxx4Aq9H0v0u4k6Ey7-V0fuxAETl-Z_PAeP8nFLPg"
        );
      })
    );
  }

  public register(newToken: string): boolean {
    try {
      const decodedToken = jwtDecode(newToken);
      const expiration = dayjs(decodedToken.exp! * 1000);

      if (!expiration.isValid()) return false;

      const now = dayjs();

      if (expiration.isBefore(now)) {
        return false;
      }

      localStorage.setItem("session", newToken);
      this.token = newToken;
      this.isLoggedIn = true;

      // Start checking expiration when we register a new token
      this.startExpirationCheck();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  public logout() {
    this.token = "";
    this.isLoggedIn = false;
    localStorage.removeItem("session");
    this.stopExpirationCheck();
  }
}

export const sessions = new Session();
