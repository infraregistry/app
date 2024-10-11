import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

export function createSession() {
  let token = $state("");
  let isLoggedIn = $state(false);
  let intervalId: NodeJS.Timeout | undefined;

  const isExpired = $derived.by(() => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token);
      const expiration = dayjs(decodedToken.exp * 1000);
      return dayjs().isAfter(expiration);
    } catch (e) {
      return true;
    }
  });

  const register = (newToken: string): boolean => {
    try {
      const decodedToken = jwtDecode(newToken);
      const expiration = dayjs(decodedToken.exp * 1000);

      if (!expiration.isValid()) return false;

      const now = dayjs();

      if (expiration.isBefore(now)) {
        return false;
      }

      localStorage.setItem("session", newToken);
      token = newToken;
      isLoggedIn = true;

      // Start checking expiration when we register a new token
      startExpirationCheck();
      return true;
    } catch (e) {
      return false;
    }
  };

  const checkExpiration = () => {
    if (isExpired) {
      token = "";
      isLoggedIn = false;
      localStorage.removeItem("session");
      stopExpirationCheck();
    }
  };

  const startExpirationCheck = () => {
    stopExpirationCheck();

    intervalId = setInterval(checkExpiration, 60000);
  };

  const stopExpirationCheck = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  };

  const init = () => {
    const storedToken = localStorage.getItem("session");
    return storedToken ? register(storedToken) : false;
  };

  return {
    get token() {
      return token;
    },
    get isLoggedIn() {
      return isLoggedIn;
    },
    get isExpired() {
      return isExpired;
    },
    register,
    init
  };
}

export const sessions = createSession();
