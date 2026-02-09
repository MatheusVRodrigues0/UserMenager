export class Password {
  constructor(public readonly password?: string) {}

  static create(raw: string){
    if (!raw) throw new Error('Password is empty');

    if (raw.length < 8) throw new Error('Low password');
    if (raw.length > 128) throw new Error('Long Password');

    if (!/[A-Z]/.test(raw)) throw new Error('Must include uppercase in password');
    if (!/[a-z]/.test(raw)) throw new Error('Must include lowercase in password');
    if (!/[0-9]/.test(raw)) throw new Error('Must include number in password');
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(raw)) throw new Error('Must special character');

    return new Password(raw);
  }

  getPassword(): string| undefined{
    return this.password;
  }
}