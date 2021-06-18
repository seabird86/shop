import { User } from "./user.model";

export class Branch {
  branchId: Number;
  parent_id: number;
  branch_code: string;
  address: string;
  director: string;
  mobile: string;
  data?: any;
  orgName?: string;
  checked?: boolean;
  status?: string;
  level?: number;
  branches: Branch[];
  createdBy: any;
  createdDatetime: any;
  lastUpdatedBy: any;
  lastUpdatedDatetime: any;
  org_name: string;
  tax_code: string;
  user: User;
  Branch(
    branchId: Number,
    parent_id: number,
    branch_code: string,
    address: string,
    director: string,
    mobile: string,
    data?: string,
    orgName?: string,
    checked = false,
    status?: string,
    level?: number,
    branches?: any[],
  ) { }
}

