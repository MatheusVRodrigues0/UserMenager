import { NotFoundError } from "../../../../../error/notFoundError"
import { Password } from "../../../domain/entity/password-entity"
import { User } from "../../../domain/entity/user-entity"
import { PasswordRepositories } from "../../ports/password-port"
import { UserRepositories } from "../../ports/user-port"
import { AuthUserUseCase } from "../auth-user-use-case"
import { ValidationError } from "../../../../../error/validationError"

// type Mockify<T> = {
//   [K in keyof T]: T[K] extends (...args: infer A) => infer R
//     ? jest.Mock<R, A>
//     : T[K];
// };
//como que funciona isso?
type MockifyPartial<T> = Partial<{
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? jest.Mock<ReturnType<T[K]>, Parameters<T[K]>>
    : T[K];
}>;

describe('AuthUserUseCase', ()=>{
  let authUserUseCase: AuthUserUseCase;
  let userRepositoryMock: MockifyPartial<UserRepositories>;
  let passwordRepositoryMock: MockifyPartial<PasswordRepositories>;

  const userInstance = new User({
      id:'123', 
      name: 'matheus', 
      email:'matheus@gmail.com', 
      password: new Password('123123123'), 
      role:"Admin"
    });
  // this "beforeEach" needs to be evaluated 
  beforeEach(() => {
    userRepositoryMock = { 
      findByEmailGetDataLogin: jest.fn(),
    }
    passwordRepositoryMock = { 
      comparePassword: jest.fn(),
    }

    authUserUseCase = new AuthUserUseCase(userRepositoryMock as UserRepositories, passwordRepositoryMock as PasswordRepositories)
  })

  test("shoud throw NotFoundError('User invalid'), email invalid", async ()=>{
    userRepositoryMock.findByEmailGetDataLogin!.mockResolvedValue(null);
    passwordRepositoryMock.comparePassword!.mockResolvedValue(true)
    await expect(authUserUseCase.execute({email:'matheus@gmail.com',password:'mastehs'})).rejects.toThrow(NotFoundError);

  })
  
  test("shoud throw ValidationError('Password invalid'), compare password = false", async ()=>{
    userRepositoryMock.findByEmailGetDataLogin!.mockResolvedValue(userInstance);
    passwordRepositoryMock.comparePassword!.mockResolvedValue(false);
    await expect(authUserUseCase.execute({email:'matheus@gmail.com',password:'mastehs'})).rejects.toThrow(ValidationError);

  })

  test('shoud authenticated and return a payload', async ()=> {
    userRepositoryMock.findByEmailGetDataLogin!.mockResolvedValue(userInstance);
    passwordRepositoryMock.comparePassword!.mockResolvedValue(true)
    const payload = await authUserUseCase.execute({email:'matheus@gmail.com',password:'mastehs'}); 
    console.log(payload);
    expect(payload.idUser).toBe('123');
  })

  
})