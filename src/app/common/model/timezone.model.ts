export class TimeZone {
    deviceTimeZoneId: number;
    deviceId: number;
    timeZoneId: number;
    timeZoneName: string;
    description: string;
    listTimeZoneDay: TimeZoneDayVM[];
    defaultTimeZone: boolean;
    checked: boolean;
    currentTimeZone: boolean;
    constructor() { this.timeZoneName = '' }
}

export class TimeZoneDay {
    dayName: number;
    timeIn: Date;
    timeOut: Date;
    constructor(
        dayName: number,
        timeIn: Date,
        timeOut: Date
    ) {
        this.dayName = dayName;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
    }
}

export class TimeZoneDayVM {
    dayName: number;
    timeIn: String;
    timeOut: String;
    constructor(
        dayName: number,
        timeIn: String,
        timeOut: String
    ) {
        this.dayName = dayName;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
    }
}

export const TimeZoneDefault: TimeZoneDay[] = [
    {
        dayName: 1,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    },
    {
        dayName: 2,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    },
    {
        dayName: 3,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    },
    {
        dayName: 4,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    },
    {
        dayName: 5,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    },
    {
        dayName: 6,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    },
    {
        dayName: 7,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    },
    {
        dayName: 0,
        timeIn: new Date(0, 0, 0, 0, 0, 0),
        timeOut: new Date(0, 0, 0, 23, 59, 59),
    }
]

export class DeviceHoliday {
    deviceHolidayId: number;
    branchId: number;
    holidayId: number;
    holidayName: String;
    description: String;
    holidayStart: Date;
    holidayFinish: Date;
}

export class WorkingDay {
    workingDayId: number;
    branchId: number;
    dayInWeek: number;
    worked: boolean;
    time: String;
    workingShift: WorkingShift[];
}

export class WorkingShift {
    workingShiftId: number;
    workingDayId: number;
    startTime: Date;
    endTime: Date;
    id: number;
    constructor(
        id?: number
    ) {
        this.startTime = new Date();
        this.endTime = new Date();
        this.id = id;
    }
}

export class Holiday {
    holidayId: number;
    dayInWeek: number;
    branchId: number;
    startDate: Date;
    endDate: Date;
    evenWeek: boolean;
    oddWeek: boolean;
    name: String;
    active: boolean;
    constructor(
    ) {
        this.startDate = new Date();
        this.endDate = new Date();
        this.dayInWeek = 0;
        // this.evenWeek = false;
        // this.oddWeek = false;
        // this.active = true;
    }
}
