export class ResetPasswordModel {
    email: string = "";
    password: string = "";
    repassword: string = "";
    param: string = "";
}

export class SendEmailModel {
    constructor(email: String, password: String, param: String) { }
}
