import { SelectItem } from "primeng/api/selectitem";

export class AppItem {
  static status_N_A_I: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "enum.status.N", value: "N" },
    { label: "enum.status.A", value: "A" },
    { label: "enum.status.I", value: "I" }
  ];
  static status_N_A: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "enum.status.N", value: "N" },
    { label: "enum.status.A", value: "A" }
    // { label: 'I', value: 'I' }
  ];
  static typeUser: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "ORG", value: "ORG" },
    { label: "CUS", value: "CUS" },
    { label: "EMP", value: "EMP" }
  ];
  static userType: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "enum.type.ORG", value: "ORG" },
    { label: "enum.type.CUS", value: "CUS" },
    { label: "enum.type.EMP", value: "EMP" }
  ];
  static statusUser_N_A_I: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "N", value: "N" },
    { label: "A", value: "A" },
    { label: "I", value: "I" }
  ];
  static gender: SelectItem[] = [
    { label: "enum.gender.M", value: "M" },
    { label: "enum.gender.FEM", value: "FEM" }
  ];
}
