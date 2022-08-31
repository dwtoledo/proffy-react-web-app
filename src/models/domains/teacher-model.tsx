import { Subject } from "./subject-model";

export class Teacher {
  private name: string;
  private subjects: Array<Subject>;
  private avatar: string;
  private phone: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getSubjects(): Array<Subject> {
    return this.subjects;
  }

  public setSubjects(subjects: Array<Subject>): void {
    this.subjects = subjects;
  }

  public getAvatar(): string {
    return this.avatar;
  }

  public setAvatar(avatar: string): void {
    this.avatar = avatar;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }
}
