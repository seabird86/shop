

export class GroupVM {
    groupType = 'C';
    constructor(
        public groupName?: string,
        public description?: string,
        public forms?: string[],
        public groupId?: number,
    ) { }
}

export class Group {
    groupId: Number;
    groupName: string;
    description: string;
    checked = false; // not property
    forms: Form[];
    listForm: string[];
}
export class Card {
    cardId: Number;
    card_number: string;
    name: string;
    sec_version: String;
    reader_type: String;
    sec_datetime: Date;
    type: String;
    checked = false; // not property
    forms: Form[];
    listForm: string[];
}
export class Form {
    formId: number;
    formCode: string;
    checked: boolean;
    original: boolean;
    parentId: number;
    description: string;
    descEn: string;
    descVn: string;
    remark: string;
    margin: number;
    isChange() {
        return this.original === this.checked;
    }
}
