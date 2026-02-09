import bcrypt from "bcrypt";
import { PasswordRepositories } from "../../../application/ports/password-port";
export class PasswordRepositoriesBcrypt implements PasswordRepositories {
  async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }
  async comparePassword(passwordInput: string, passwordHash: string): Promise<boolean | null> {
    return await bcrypt.compare(passwordInput, passwordHash);
  }
}