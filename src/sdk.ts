import request, { setToken } from "./request";

class SDK {
  private token: string | undefined;

  auth(username: string, password: string) {
    return request
      .post("/token", {
        username,
        password,
      })
      .then(({ data }) => {
        if (data?.Document) {
          this.setToken(data.Document);
        } else {
          throw new Error("Authentication failed.");
        }
      });
  }

  getToken(): string | undefined {
    return this.token;
  }

  setToken(token: string): void {
    this.token = token;
    setToken(token);
  }
}

export const sdk = new SDK();
