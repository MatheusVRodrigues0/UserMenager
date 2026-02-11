import { ValidationError } from "../../../../../error/validationError";
import { Password } from "../../../domain/entity/password-entity";
import { User } from "../../../domain/entity/user-entity";
import { IUserCreate } from "../../dto/user-params-dto";
import { PasswordRepositories } from "../../ports/password-port";
import { UserRepositories } from "../../ports/user-port";
import { CreateUserUseCase } from "../create-user-use-case"
import { MockifyPartial } from "./mappers/instanceToInstanceMocked"

describe('createUserUseCase', ()=>{
  let createUserUseCase: CreateUserUseCase;
  let userRepositoryMock: MockifyPartial<UserRepositories>;
  let passwordRepositoryMock: MockifyPartial<PasswordRepositories>;

  const dataUser: IUserCreate = {
    name: 'matheus', 
    email:'matheus@gmail.com', 
    password: '123123123', 
    role: "Admin"
  };
  const user = new User({
    id: "123",
    name: dataUser.name,
    email: dataUser.email,
    role: dataUser.role
  })

  beforeEach(() => {
    userRepositoryMock = { 
      findByEmail: jest.fn(),
    }
    passwordRepositoryMock = { 
      encryptPassword: jest.fn(),
    }

    createUserUseCase = new CreateUserUseCase(userRepositoryMock as UserRepositories, passwordRepositoryMock as PasswordRepositories)
  })

  test("Shoud throw ValidationError('Email cadastred'), this email is cadastred", async ()=>{
    userRepositoryMock.findByEmail!.mockResolvedValue(user);
    passwordRepositoryMock.encryptPassword!.mockResolvedValue(dataUser.password);
    await expect(createUserUseCase.execute(dataUser)).rejects.toThrow(ValidationError)
  })

})