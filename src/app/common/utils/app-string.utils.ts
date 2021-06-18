export class AppString {

    public static joinParam(obj: any): string {
        return Object.keys(obj).map(i => `${i}=${obj[i]}`).join('&');
    }

    public static isEmpty(obj: any): boolean {
        return obj == null || obj.trim() === '';
    }


    public static toJson(obj: any): string {
        return '';
    }

    public static toString(obj: any): string {
        return obj + '';
    }
    public static isBlank(str:string) {
        return (!str || /^\s*$/.test(str));
    }
}
