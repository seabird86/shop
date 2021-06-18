import { Holiday } from "../model/timezone.model";

export class AppDate {
    public static toDate(param: any): Date {
        var ar = param.split("/");
        return new Date(ar[2] + "/" + ar[1] + "/" + ar[0]);
    }

    public static toTime(param: any): Date {
        return new Date(0, 0, 0, Number(param.substring(0, 2)), Number(param.substring(3, 5)));
    }

    public static timeStampToDate(param: any): Date {
        let date: Date = new Date(param);
        return date;
    }

    public static getHoliday(param: Holiday): Date[] {
        let listDate: Date[] = [];
        if (!param.evenWeek && !param.oddWeek) {
            for (var d = new Date(param.startDate); d <= param.endDate; d.setDate(d.getDate() + 1)) {
                listDate.push(new Date(d));
            }
        } else if (param.evenWeek && param.oddWeek) {
            for (var d = new Date(param.startDate); d <= param.endDate; d.setDate(d.getDate() + 1)) {
                if (d.getDay() + 1 == param.dayInWeek) {
                    listDate.push(new Date(d));
                }
            }
        } else {
            for (var d = new Date(param.startDate); d <= param.endDate; d.setDate(d.getDate() + 1)) {
                if (d.getDay() + 1 == param.dayInWeek && param.evenWeek && this.isEvenWeek(d)) {
                    listDate.push(new Date(d));
                } else if (d.getDay() + 1 == param.dayInWeek && param.oddWeek && !this.isEvenWeek(d)) {
                    listDate.push(new Date(d));
                }
            }
        }
        return listDate;
    }


    public static isEvenWeek(param: Date): boolean {
        let weeks = [],
            firstDate = new Date(param.getFullYear(), param.getMonth(), 1),
            lastDate = new Date(param.getFullYear(), param.getMonth() + 1, 0),
            numDays = lastDate.getDate();

        let start = 1;
        let end = 7 - firstDate.getDay();
        while (start <= numDays) {
            weeks.push({ start: start, end: end });
            start = end + 1;
            end = end + 7;
            if (end > numDays)
                end = numDays;
        }
        let isEven = false;
        weeks.forEach((res, index) => {
            if (param.getDate() >= res.start && param.getDate() <= res.end) {
                if (index % 2 == 1) {
                    isEven = true;
                }
            }
        });
        if (isEven) return true;
        return false;
    }


}