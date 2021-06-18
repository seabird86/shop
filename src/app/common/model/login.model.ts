
export class LoginReq {
  constructor(public username: string, public password: string) {
  }
}



export class LoginRes {
  public idToken: string;
}
