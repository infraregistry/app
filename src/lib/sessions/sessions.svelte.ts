import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { delay, Observable, of, tap } from "rxjs";

class Session {
  private token: string = $state("");
  public isLoggedIn: boolean = $state(false);
  private intervalId: NodeJS.Timeout | undefined;

  public init() {
    const storedToken = localStorage.getItem("session");
    this.startExpirationCheck();
    return storedToken ? this.register(storedToken) : false;
  }

  private isExpired = () => {
    if (!this.token) return true;
    try {
      const decodedToken = jwtDecode(this.token);
      const expiration = dayjs(decodedToken.exp * 1000);
      if (!expiration.isValid()) return true;

      return dayjs().isAfter(expiration);
    } catch (e) {
      return true;
    }
  };

  private startExpirationCheck() {
    this.stopExpirationCheck();

    this.intervalId = setInterval(() => {
      const isExpired = this.isExpired();
      if (isExpired) {
        this.token = "";
        this.isLoggedIn = false;
        localStorage.removeItem("session");
        this.stopExpirationCheck();
      }
    }, 1000);
  }

  private stopExpirationCheck() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  public login(email: string, password: string): Observable<boolean> {
    return of(true).pipe(delay(2000), tap(() => {
      this.register("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5OTk5OTk5OTl9.0OKxx4Aq9H0v0u4k6Ey7-V0fuxAETl-Z_PAeP8nFLPg");
    }));
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
