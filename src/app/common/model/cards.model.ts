export class Card {
    cardId: Number;
    cardCode: string;
    card_number: string;
    reader_type: string;
    sec_datetime: Date;
    fullname: String;
    lastUpdatedDatetime: Date;
    sec_version: number;
    type: String;
    status: String;
    templ_id: Number;
    back_img: string;
    branch_name: string;
    card_type: String;
    front_img: String;
    org_name: String;
    template_code: String;
    template_name: String;
}
export class Template {
    id: Number;
    back_img: string;
    branch_id: number;
    branch_name: string;
    card_type: String;
    front_img: String;
    org_name: String;
    template_code: String;
    template_name: String;
}
export class CardRelease {
    user_card_id: Number;
    userId: Number;
    cardId: Number;
    branchId: number;
    fullName: String;
    userCode: String;
    cardNumber: String;
    privilege: number;
    sec_datetime: Date;
    card_status: String;
    user_status: String;
    templ_id: Number;
    batch_id: Number;
}
export class FilterCard {
    card_number?: String;
}
export class FilterCardRelease {
    card_number?: String;
    fullname?: String;
}
export class BATCHCARD {
    batch_id: String;
    branch_id: number;
    reader_type: String;
    templ_id: Number;
    type: String;
}
export class CARDTEMP {
    card_number: String;
    userCode: String;
    created_by: Number;
    created_datetime: String;
    batch_id: String;
}
export class CARDISSUETEMP {
    user_card_id: Number;
    userId: Number;
    cardId: Number;
    fullName: String;
    userCode: String;
    card_number: String;
    sec_datetime: Date;
    batch_id: String;
    templ_id: Number;
}

export class HTML {
    uri: String;
    html: String;
    listTemp: String[];
    result: String;
    batch_id: String;
    card_number: String;
    userCode: String;
    filterBy: String;
    orderBy: String;
    page: number;
    size: number;
}
