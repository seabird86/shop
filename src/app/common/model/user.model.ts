import { Group } from './group.model';

export class User {
  userId?: Number;
  userCode?: String;
  status?: string;
  type?: string;
  batchId?: string;
  image?: String;
  gender?: String;
  device_access?: String;
  createdDatetime?: string;
  lastUpdatedDatetime?: string;
  passwrd?: string;
  public groupIds?: Number[];
  public groups?: Group[];
  seqno?: number;
  birthDay?: Date;
  constructor(public email?: string, public fullname?: string, public mobile?: string) {
  }
}

export class Paging {
  total?: number;
  first?: boolean;
  last?: boolean;
}

export class PagingRes<T> {
  paging?: Paging;
  data?: T[];
}

export class FilterUser {
  fullname?: string;
  email?: string;
  mobile?: string;
  branch_id?: Number;
}
export class FilterService {
  service_code?: string;
  service_name?: string;
}
export class Type {
  name?: string;
}
export class UserStatusPut {
  constructor(public status: string) {
  }
}