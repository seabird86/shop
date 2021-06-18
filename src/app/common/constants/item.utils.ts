import { SelectItem } from "primeng/api/selectitem";

export class Item {
  static language_E_V: SelectItem[] = [
    { label: "Viet Nam", value: "vi", icon:"vn" },
    { label: "English", value: "en", icon:"us"}    
  ];


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
  static cardTypes: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "enum.cardType.MFR", value: "MFR" },
    { label: "enum.cardType.PRX", value: "PRX" },
    { label: "enum.cardType.FEL", value: "FEL" }
  ];

  static cardTechs: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "RFID", value: "RFD" },
    { label: "NFC", value: "NFC" }
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
  static transactionStatus: SelectItem[] = [
    { label: " ---  ", value: null },
    { label: "enum.status_trans.S", value: "S" },
    { label: "enum.status_trans.U", value: "U" }
  ];
  static monetaryType: SelectItem[] = [
    { label: "Tài chính", value: true },
    { label: "Phi tài chính", value: false }
  ];
  static device_name: SelectItem[] = [
    { label: "---", value: null },
    { label: "F18", value: "F18" },
    { label: "Access Controll", value: "Access Controll" }
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
  static device_access: SelectItem[] = [
    { label: "enum.device_access.ADM", value: "ADM" },
    { label: "enum.device_access.U", value: "U" }
  ];
  static devceType: SelectItem[] = [
    { label: "Alone", value: 1 },
    { label: "Double", value: 2 },
    { label: "Triple", value: 3 }
  ];
  static accessTime: SelectItem[] = [
    { label: "enum.accessTime.F", value: "F" },
    { label: "enum.accessTime.H", value: "H" }
  ];
  static deviceStatus: SelectItem[] = [
    { label: "enum.accessStatus.A", value: "A" },
    { label: "enum.accessStatus.I", value: "I" },
    { label: "enum.accessStatus.O", value: "O" }
  ];
  static accessType: SelectItem[] = [
    { label: "enum.accessType.A", value: "A" },
    { label: "enum.accessType.C", value: "C" },
    { label: "enum.accessType.FP", value: "FP" },
    { label: "enum.accessType.CP", value: "CP" }
  ];
  static report: SelectItem[] = [
    { label: "report.total", value: "total" },
    { label: "report.detail", value: "detail" }
  ];
  static reportTypes: SelectItem[] = [
    { label: "PDF", value: "PDF" },
    { label: "HTML", value: "HTML" }
  ];
  static chart: SelectItem[] = [
    { label: "report.chart_branch", value: 1 },
    { label: "report.chart_user", value: 0 }
  ];
  static weekDay: SelectItem[] = [
    { label: "none", value: 0 },
    { label: "sun", value: 1 },
    { label: "mon", value: 2 },
    { label: "tue", value: 3 },
    { label: "wed", value: 4 },
    { label: "thu", value: 5 },
    { label: "fri", value: 6 },
    { label: "sat", value: 7 }
  ];
}
