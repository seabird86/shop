import { AppString } from "../utils/app-string.utils";
import { isUndefined } from "util";

export class MtApi {
  constructor(
    public urlPatern: string,
    public method: string,
    authorized: string,
    pagination: boolean,
    public forms?: string[],
    public gateway?: boolean
  ) { }
  url(param?: any) {
    return this.urlWithId([], param);
  }
  urlWithId(ids: any[], param?: any) {
    let url = this.urlPatern;
    let i = 1;
    for (const id of ids) {
      url = url.replace("{id" + i + "}", id);
      ++i;
    }
    if (this.gateway) {
      return (
        "gw" +
        url +
        (isUndefined(param) ? "" : "?" + AppString.joinParam(param))
      );
    }
    return (
      "app/api" +
      url +
      (isUndefined(param) ? "" : "?" + AppString.joinParam(param))
    );
  }
}

class Method {
  public static POST = "post";
  public static GET = "get";
  public static DELETE = "delete";
  public static PUT = "put";
}

export class APIConfig {
  public static LOGIN: MtApi = new MtApi("/auth", Method.POST, "NON", false);
  public static LOGOUT: MtApi = new MtApi("/auth", Method.DELETE, "NON", false);
  public static RESETPASSWORD: MtApi = new MtApi(
    "/account/resetPassword",
    Method.POST,
    "NON",
    false
  );
  public static RESETPASSWORDGET: MtApi = new MtApi(
    "/account/resetPassword",
    Method.GET,
    "NON",
    false
  );
  public static RESETPASSWORDPUT: MtApi = new MtApi(
    "/account/resetPassword",
    Method.PUT,
    "NON",
    false
  );
  public static GROUPGETALL: MtApi = new MtApi(
    "/group",
    Method.GET,
    "FRM",
    true,
    ["GROUP_INFO"]
  );
  public static GROUPGET: MtApi = new MtApi(
    "/group/{id1}",
    Method.GET,
    "FRM",
    false,
    ["GROUP_INFO"]
  );
  public static GROUPDELETE: MtApi = new MtApi(
    "/group/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["GROUP_DELETE"]
  );
  public static GROUPPUT: MtApi = new MtApi(
    "/group/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["GROUP_EDIT"]
  );
  public static GROUPPOST: MtApi = new MtApi(
    "/group",
    Method.POST,
    "FRM",
    false,
    ["GROUP_ADD"]
  );
  public static FORMGET: MtApi = new MtApi("/form", Method.GET, "FRM", true, [
    "GROUP_INFO"
  ]);
  public static USERLIST: MtApi = new MtApi("/user", Method.GET, "NON", true, [
    "USER_INFO"
  ]);
  public static USERGET: MtApi = new MtApi(
    "/user/{id1}",
    Method.GET,
    "FRM",
    true,
    ["USER_INFO"]
  );
  public static USER_TEMPLATE_GET: MtApi = new MtApi(
    "/tempUser",
    Method.GET,
    "FRM",
    true,
    ["IPMPORT_USER_EXCEL"]
  );
  public static USER_TEMPLATE_DELETE_ALL: MtApi = new MtApi(
    "/tempUser",
    Method.DELETE,
    "FRM",
    true,
    ["IPMPORT_USER_EXCEL"]
  );
  public static USER_TEMPLATE_DELETE: MtApi = new MtApi(
    "/tempUser/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["IMPORT_USER_EXCEL"]
  );
  public static USERADD: MtApi = new MtApi("/user", Method.POST, "FRM", true, [
    "USER_ADD"
  ]);
  public static USERPOSTEXCEL: MtApi = new MtApi(
    "/tempUser/{id1}/{id2}",
    Method.POST,
    "FRM",
    false,
    ["IMPORT_USER_EXCEL"]
  );
  public static USERDELETE: MtApi = new MtApi(
    "/user/{id1}",
    Method.DELETE,
    "FRM",
    true,
    ["USER_DELETE"]
  );
  public static USERPUT: MtApi = new MtApi(
    "/user/{id1}",
    Method.PUT,
    "FRM",
    true,
    ["USER_EDIT"]
  );
  public static USER_POST_EXCEL: MtApi = new MtApi(
    "/user/{id1}",
    Method.POST,
    "FRM",
    false,
    ["IMPORT_USER_EXCEL"]
  );
  public static CHANGEPASS: MtApi = new MtApi(
    "/account/password",
    Method.PUT,
    "STD",
    false
  );
  public static SHOWACCOUNT: MtApi = new MtApi(
    "/account",
    Method.GET,
    "STD",
    false
  );
  public static USER_STATUS_PUT: MtApi = new MtApi(
    "/user/{id1}/status",
    Method.PUT,
    "FRM",
    false,
    ["USER_STATUS"]
  );

  public static BRANCH_GET_ALL: MtApi = new MtApi(
    "/branch",
    Method.GET,
    "FRM",
    true,
    ["BRANCHGET"]
  );
  public static BRANCHGET: MtApi = new MtApi(
    "/branch/{id1}",
    Method.GET,
    "FRM",
    true,
    ["BRANCH_GET"]
  );
  public static BRANCHADD: MtApi = new MtApi(
    "/branch",
    Method.POST,
    "FRM",
    true,
    ["BRANCH_ADD"]
  );
  public static BRANCHDELETE: MtApi = new MtApi(
    "/branch/{id1}",
    Method.DELETE,
    "FRM",
    true,
    ["BRANCH_DELETE"]
  );
  public static BRANCHPUT: MtApi = new MtApi(
    "/branch/{id1}",
    Method.PUT,
    "FRM",
    true,
    ["BRANCH_PUT"]
  );
  public static DEVICE_GET_ALL: MtApi = new MtApi(
    "/device",
    Method.GET,
    "FRM",
    true,
    ["DEVICE_INFO"]
  );
  public static DEVICE_POST: MtApi = new MtApi(
    "/device",
    Method.POST,
    "STD",
    false,
    ["DEVICE_ADD"]
  );
  public static DEVICE_GET: MtApi = new MtApi(
    "/device/{id1}",
    Method.GET,
    "FRM",
    false,
    ["DEVICE_INFO"]
  );
  public static DEVICE_PUT: MtApi = new MtApi(
    "/device/{id1}",
    Method.PUT,
    "STD",
    false,
    ["DEVICE_EDIT"]
  );
  public static DEVICE_DELETE: MtApi = new MtApi(
    "/device/{id1}",
    Method.DELETE,
    "STD",
    false,
    ["DEVICE_INFO"]
  );
  public static DEVICE_STATUS_PUT: MtApi = new MtApi(
    "/device/{id1}/status",
    Method.PUT,
    "FRM",
    false,
    ["DEVICE_STATUS"]
  );
  public static DEVICE_GET_CONNECTION: MtApi = new MtApi(
    "/device/connect",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_INFO"],
    true
  );
  public static GETFORMBYUSER: MtApi = new MtApi(
    "/form/{id1}",
    Method.PUT,
    "NON",
    true,
    ["FORM_GET"]
  );
  public static SERVICEGETLIST: MtApi = new MtApi(
    "/service",
    Method.GET,
    "FRM",
    true,
    ["SERVICE_INFO"]
  );
  public static SERVICEGET: MtApi = new MtApi(
    "/service/{id1}",
    Method.GET,
    "FRM",
    false,
    ["SERVICE_GET"]
  );
  public static SERVICEPOST: MtApi = new MtApi(
    "/service",
    Method.POST,
    "FRM",
    false,
    ["SERVICE_ADD"]
  );
  public static SERVICEPUT: MtApi = new MtApi(
    "/service/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["SERVICE_EDIT"]
  );
  public static READER_GET_LIST: MtApi = new MtApi(
    "/reader",
    Method.GET,
    "FRM",
    true,
    ["DEVICE_EDIT"]
  );
  public static READER_GET: MtApi = new MtApi(
    "/reader/{id1}",
    Method.GET,
    "FRM",
    false,
    ["DEVICE_EDIT"]
  );
  public static READER_PUT: MtApi = new MtApi(
    "/reader/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["DEVICE_EDIT"]
  );
  public static READER_PUT_STATUS: MtApi = new MtApi(
    "/reader/{id1}/status",
    Method.PUT,
    "FRM",
    false,
    ["DEVICE_EDIT"]
  );
  public static SERVICE_STATUS_PUT: MtApi = new MtApi(
    "/service/{id1}/status",
    Method.PUT,
    "FRM",
    false,
    ["SERVICE_STATUS"]
  );
  public static SYCN_USER_CARD_DEVICE: MtApi = new MtApi(
    "/device/{id1}/sycn",
    Method.GET,
    "FRM",
    false,
    ["DEVICE_SYCN"],
    true
  );
  public static SYNC_USER_DEVICE_TO_DEVICE: MtApi = new MtApi(
    "/device/{id1}/sycn",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_SYCN"],
    true
  );
  public static SYNC_CONFIG_DEVICE_TO_DEVICE: MtApi = new MtApi(
    "/device/{id1}/sycn/config",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_SYCN"],
    true
  );
  // Card
  public static LIST_CARD_REGISTER: MtApi = new MtApi(
    "/card",
    Method.GET,
    "FRM",
    true,
    ["CARD_LIST"]
  );
  public static CARD_REGISTER_POST: MtApi = new MtApi(
    "/card",
    Method.POST,
    "FRM",
    false,
    ["CARD_ADD"]
  );
  public static CARD_REGISTER_INFO: MtApi = new MtApi(
    "/card/{id1}",
    Method.GET,
    "FRM",
    false,
    ["CARD_INFO"]
  );
  public static CARD_REGISTER_PUT: MtApi = new MtApi(
    "/card/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["CARD_EDIT"]
  );
  public static CARD_REGISTER_DELETE: MtApi = new MtApi(
    "/card/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["CARD_DELETE"]
  );
  public static CARD_REGISTER_DELETE_ALL: MtApi = new MtApi(
    "/card",
    Method.DELETE,
    "FRM",
    false,
    ["CARD_DELETE_ALl"]
  );
  public static BATCH_REGISTER_POST: MtApi = new MtApi(
    "/batch",
    Method.POST,
    "FRM",
    false,
    ["CARD_ADD_BATCH"]
  );
  public static BATCH_REGISTER_ID_POST: MtApi = new MtApi(
    "/batch/{id1}/card",
    Method.POST,
    "STD",
    false
  );
  public static BATCH_REGISTER_GET: MtApi = new MtApi(
    "/batch",
    Method.GET,
    "STD",
    false
  );
  public static BATCH_REGISTER_ID_PUT: MtApi = new MtApi(
    "/batch/{id1}",
    Method.PUT,
    "STD",
    false
  );
  public static BATCH_REGISTER_CARD_GET: MtApi = new MtApi(
    "/batch/{id1}/card",
    Method.GET,
    "STD",
    false
  );
  public static BATCH_REGISTER_CARD_ID_DELETE: MtApi = new MtApi(
    "/batch/{id1}/card/{id2}",
    Method.DELETE,
    "STD",
    false
  );
  public static BATCH_REGISTER_CARD_DELETE: MtApi = new MtApi(
    "/batch/{id1}/card",
    Method.DELETE,
    "STD",
    false
  );

  public static LIST_CARD_ISSUE: MtApi = new MtApi(
    "/cardrelease",
    Method.GET,
    "FRM",
    true,
    ["CARD_ISSUE_LIST"]
  );
  public static LIST_CARD_ISSUE_INFO: MtApi = new MtApi(
    "/cardrelease/{id1}",
    Method.GET,
    "STD",
    false
  );
  public static CARD_ISSUE_ADD: MtApi = new MtApi(
    "/cardrelease",
    Method.POST,
    "FRM",
    false,
    ["ADD_CARD_ISSUE"]
  );
  public static CARD_ISSUE_DELETE: MtApi = new MtApi(
    "/cardrelease/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["DELETE_CARD_ISSUE"]
  );
  public static CARD_ISSUE_DELETE_ALL: MtApi = new MtApi(
    "/cardrelease",
    Method.DELETE,
    "STD",
    false
  );
  public static BATCH_POST_ISSUE: MtApi = new MtApi(
    "/batchissue",
    Method.POST,
    "FRM",
    false,
    ["ADD_BATCH_CARD_ISSUE"]
  );
  public static BATCH_CARD_ADD_ISSUE: MtApi = new MtApi(
    "/batchissue",
    Method.POST,
    "STD",
    false
  );
  public static BATCH_CARD_ISSUE_GET: MtApi = new MtApi(
    "/batchissue/{id1}/card",
    Method.GET,
    "STD",
    false
  );
  public static BATCH_CARD_ISSUE_DELETE: MtApi = new MtApi(
    "/batchissue/{id1}",
    Method.DELETE,
    "STD",
    false
  );
  public static BATCH_CARD_ISSUE_ID_DELETE: MtApi = new MtApi(
    "/batchissue/{id1}/card/{id2}",
    Method.DELETE,
    "STD",
    false
  );
  public static BATCH_ISSUE_ID_POST: MtApi = new MtApi(
    "/batchissue/{id1}/card",
    Method.POST,
    "STD",
    false
  );

  // endCard
  public static GETSERVICEUSER: MtApi = new MtApi(
    "/user/{id1}/service",
    Method.GET,
    "FRM",
    true,
    ["USER_INFO"]
  );
  public static GETGROUPUSER: MtApi = new MtApi(
    "/user/{id1}/group",
    Method.GET,
    "FRM",
    true,
    ["GROUP_GET_USER"]
  );
  public static GET_USER_CARD_DEVICE: MtApi = new MtApi(
    "/device/{id1}/data",
    Method.GET,
    "FRM",
    true,
    ["DEVICE_SYCN"]
  );
  public static DELETE_ALL_TP_USER_CARD_DEVICE: MtApi = new MtApi(
    "/device/sycn/{id1}/{id2}",
    Method.DELETE,
    "FRM",
    true,
    ["DEVICE_SYCN_DATA"]
  );
  public static GETFORMUSER: MtApi = new MtApi(
    "/user/{id1}/form",
    Method.GET,
    "FRM",
    true,
    ["FORM_GET_USER"]
  );
  public static IMPORT_USER_CARD_POST: MtApi = new MtApi(
    "/device/sycn/{id1}/{id2}",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_SYCN_DATA"]
  );
  public static IMPORT_USER_CARD_GET: MtApi = new MtApi(
    "/device/sycn/{id1}/{id2}",
    Method.GET,
    "FRM",
    true,
    ["DEVICE_SYCN_DATA"]
  );
  public static DELETE_TP_USER_CARD_DEVICE: MtApi = new MtApi(
    "/device/sycn/{id1}/{id2}/{id3}",
    Method.DELETE,
    "FRM",
    true,
    ["DEVICE_SYCN_DATA"]
  );
  public static GET_LOG_DEVICE: MtApi = new MtApi(
    "/device/{id1}/log/{id2}",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_LOG"],
    true
  );
  public static SAVE_MT_USER_CARD_DEVICE: MtApi = new MtApi(
    "/device/{id1}/save/{id2}",
    Method.POST,
    "FRM",
    true,
    ["DEVICE_SYCN"]
  );
  public static TRANSACTIONGETLIST: MtApi = new MtApi(
    "/transaction",
    Method.GET,
    "FRM",
    true,
    ["TRANSACTION_INFO"]
  );
  public static TRANSACTION_USER_GET_LIST: MtApi = new MtApi(
    "/transaction_user",
    Method.GET,
    "STD",
    true
  );
  public static TRANSACTION_GET_ID: MtApi = new MtApi(
    "/transaction/{id1}",
    Method.GET,
    "FRM",
    false,
    ["TRANSACTION_INFO"]
  );
  public static TRANSACTION_GET_ID_USER: MtApi = new MtApi(
    "/transaction_user/{id1}",
    Method.GET,
    "STD",
    false
  );
  public static REPORTTOTAL: MtApi = new MtApi(
    "/report/{id1}/branch/{id2}/total",
    Method.GET,
    "FRM",
    true,
    ["REPORT_TOTAL"]
  );
  public static REPORTDETAIL: MtApi = new MtApi(
    "/report/{id1}/branch/{id2}/detail",
    Method.GET,
    "FRM",
    true,
    ["REPORT_DETAIL"]
  );
  public static CHARTUSER: MtApi = new MtApi(
    "/report/{id1}/user/{id2}",
    Method.GET,
    "FRM",
    true,
    ["CHART_USER"]
  );
  public static CHARTBRANCH: MtApi = new MtApi(
    "/report/{id1}/branch/{id2}/chart",
    Method.GET,
    "FRM",
    true,
    ["CHART_BRANCH"]
  );
  public static TRANSACTION_REAL_TIME: MtApi = new MtApi(
    "/transaction/userId/{id1}",
    Method.GET,
    "FRM",
    false,
    ["TRANSACTION_REAL_TIME"]
  );
  // UploadImage
  public static UPLOAD_IMAGE: MtApi = new MtApi(
    "/upload_image/{id1}",
    Method.POST,
    "NON",
    false
  );
  // template_card
  public static GET_LIST_TEMPLATE_CARD: MtApi = new MtApi(
    "/template_card",
    Method.GET,
    "STD",
    true
  );
  public static POST_TEMPLATE_CARD: MtApi = new MtApi(
    "/template_card",
    Method.POST,
    "STD",
    false
  );
  public static INFO_TEMPLATE: MtApi = new MtApi(
    "/template_card/{id1}",
    Method.GET,
    "STD",
    false
  );
  public static UPDATE_TEMPLATE: MtApi = new MtApi(
    "/template_card/{id1}",
    Method.PUT,
    "STD",
    false
  );
  public static DELETE_TEMPLATE_CARD: MtApi = new MtApi(
    "/template_card/{id1}",
    Method.DELETE,
    "STD",
    false
  );
  // Device Config
  public static GET_TIME_ZONE_LIST: MtApi = new MtApi(
    "/device/{id1}/work_time",
    Method.GET,
    "FRM",
    true,
    ["DEVICE_TIME_ZONE"]
  );
  public static GET_TIME_ZONE: MtApi = new MtApi(
    "/device_time/work_time/{id1}",
    Method.GET,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );
  public static POST_TIME_ZONE: MtApi = new MtApi(
    "/device_time/work_time",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );
  public static PUT_TIME_ZONE: MtApi = new MtApi(
    "/device_time/work_time/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );
  public static DELETE_TIME_ZONE: MtApi = new MtApi(
    "/device_time/work_time/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );

  public static GET_DEVICE_HOLIDAY_LIST: MtApi = new MtApi(
    "/device_time/holiday",
    Method.GET,
    "FRM",
    true,
    ["DEVICE_TIME_ZONE"]
  );
  public static GET_DEVICE_HOLIDAY: MtApi = new MtApi(
    "/device_time/holiday/{id1}",
    Method.GET,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );
  public static POST_DEVICE_HOLIDAY: MtApi = new MtApi(
    "/device_time/holiday",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );
  public static PUT_DEVICE_HOLIDAY: MtApi = new MtApi(
    "/device_time/holiday/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );
  public static DELETE_DEVICE_HOLIDAY: MtApi = new MtApi(
    "/device_time/holiday/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );
  public static DELETE_ALL_DEVICE_HOLIDAY: MtApi = new MtApi(
    "/device_time/holiday",
    Method.DELETE,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );

  public static DEVICE_CONFIG: MtApi = new MtApi(
    "/device/{id1}/config",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"],
    true
  );
  public static POST_CREATE_HTML: MtApi = new MtApi(
    "/template_card/html",
    Method.POST,
    "FRM",
    false,
    ["DEVICE_TIME_ZONE"]
  );

  // Calendar
  public static GET_CALENDAR: MtApi = new MtApi(
    "/calendar",
    Method.GET,
    "FRM",
    true,
    ["CALENDAR"]
  );
  public static POST_WORKING_SHIFT: MtApi = new MtApi(
    "/calendar/{id1}",
    Method.POST,
    "FRM",
    false,
    ["CALENDAR"]
  );
  public static PUT_WORKING_SHIFT_STATUS: MtApi = new MtApi(
    "/calendar/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["CALENDAR"]
  );
  public static GET_HOLIDAY_LIST: MtApi = new MtApi(
    "/holiday",
    Method.GET,
    "FRM",
    true,
    ["CALENDAR"]
  );
  public static PUT_HOLIDAY_STATUS: MtApi = new MtApi(
    "/holiday/{id1}/status",
    Method.PUT,
    "FRM",
    false,
    ["CALENDAR"]
  );
  public static POST_HOLIDAY: MtApi = new MtApi(
    "/holiday",
    Method.POST,
    "FRM",
    false,
    ["CALENDAR"]
  );
  public static PUT_HOLIDAY: MtApi = new MtApi(
    "/holiday/{id1}",
    Method.PUT,
    "FRM",
    false,
    ["CALENDAR"]
  );
  public static DELETE_HOLIDAY: MtApi = new MtApi(
    "/holiday/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["CALENDAR"]
  );

  public static DELETE_ALL_HOLIDAY: MtApi = new MtApi(
    "/holiday/branch/{id1}",
    Method.DELETE,
    "FRM",
    false,
    ["CALENDAR"]
  );
}
export class APIAsset {
  public static URL_IMG = "/store/img/";
  public static URL_IMG_USER = APIAsset.URL_IMG + "user/";
  public static URL_IMG_TEMPLATE = APIAsset.URL_IMG + "template/";
}
