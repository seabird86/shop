export class AppNumber {

    public static toNumber(param: string): Number {
        if (param == null) {
            return null;
        }
        return Number(param);
    }



}
