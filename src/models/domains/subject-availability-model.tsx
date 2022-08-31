import { WeekDayTypes } from "./weekday-types";

export class SubjectAvailability {
  private weekDay: WeekDayTypes;
  private startTime: Date;
  private endTime: Date;

  public getWeekDay(): WeekDayTypes {
    return this.weekDay;
  }

  public setWeekDay(weekDay: WeekDayTypes): void {
    this.weekDay = weekDay;
  }

  public getStartTime(): Date {
    return this.startTime;
  }

  public setStartTime(startTime: Date): void {
    this.startTime = startTime;
  }

  public getEndTime(): Date {
    return this.endTime;
  }

  public setEndTime(endTime: Date): void {
    this.endTime = endTime;
  }
}
