import { Password } from "./password-entity";

export const roles = ['Admin', 'User'] as const 
export class User {
  public id?: string;
  public name: string;
  public email: string;
  public role: (typeof roles)[number];
  public password?: Password;
  constructor(user: User) {
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
    this.id = user.id;
    this.password = user.password;
  }
}