import { SubjectAvailability } from "./subject-availability-model";
import { SubjectTypes } from "./subject-types";

export class Subject {
  private subject: SubjectTypes;
  private availability: Array<SubjectAvailability>;

  public getSubject(): SubjectTypes {
    return this.subject;
  }

  public setSubject(subject: SubjectTypes): void {
    this.subject = subject;
  }

  public getAvailability(): Array<SubjectAvailability> {
    return this.availability;
  }

  public setAvailability(availability: Array<SubjectAvailability>): void {
    this.availability = availability;
  }
}
