
export interface PasswordRepositories {
  encryptPassword(password:string): Promise<string>
  comparePassword(passwordInput: string, passwordHash:string): Promise<boolean | null>
}