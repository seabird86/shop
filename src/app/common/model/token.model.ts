import { JwtHeader, JwtPayload } from "jwt-decode";

export interface IdTokenPayload extends JwtPayload{
  email?:string;
  name?:string;
  picture?:string;
  family_name?:string;
  given_name?:string;
  img?:string;
  fullname?:string;
}

export class IdTokenHeader implements JwtHeader {

}