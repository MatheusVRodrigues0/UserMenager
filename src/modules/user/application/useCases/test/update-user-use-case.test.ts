import { NotFoundError } from "../../../../../error/notFoundError";
import { User } from "../../../domain/entity/user-entity";
import { IUserUpdate } from "../../dto/user-params-dto";
import { UserRepositories } from "../../ports/user-port";
import { UpdateUserUseCase } from "../update-user-use-case";
import { MockifyPartial } from "./mappers/instanceToInstanceMocked";


describe('UpdateUserUseCase', ()=>{
  let updateUserUseCase: UpdateUserUseCase;
  let userRepositoryMock: MockifyPartial<UserRepositories>;

  const idUser = '123';
  const dataUser: IUserUpdate = {
    name: 'matheus', 
    role: "Admin"
  };
  const user = new User({
    id: "123",
    name: 'joabner',
    email: 'matheus@gmail.com',
    role: 'User'
  })
  const userUpdate = new User({
    id: user.id,
    name: dataUser.name,
    email: user.email,
    role: dataUser.role
  })

  beforeEach(() => {
    userRepositoryMock = { 
      findById: jest.fn(),
      update: jest.fn()
    }

    updateUserUseCase = new UpdateUserUseCase(userRepositoryMock as UserRepositories)
  })

  test("Should throw NotFoundError('user not found'), UpdateUserUseCase", async ()=>{
    userRepositoryMock.findById!.mockResolvedValue(null);
    await expect(updateUserUseCase.execute(idUser,dataUser)).rejects.toThrow(NotFoundError)
  })

  test('Should update user, and return a IUserOut, UpdateUserUseCase', async ()=>{

    userRepositoryMock.update!.mockResolvedValue(userUpdate);
    userRepositoryMock.findById!.mockResolvedValue(user);
    const userNew = await updateUserUseCase.execute(idUser,dataUser);

    const [idUserCalluserRepositoryMockUpdate, userCalluserRepositoryMockUpdate] =  userRepositoryMock.update!.mock.calls[0];

    expect(userNew).toEqual({
      id: userCalluserRepositoryMockUpdate.id,
      name: userCalluserRepositoryMockUpdate.name,
      email: userCalluserRepositoryMockUpdate.email,
      role: userCalluserRepositoryMockUpdate.role
    })
  })
})