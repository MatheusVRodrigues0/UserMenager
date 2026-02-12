import { User } from "../../../domain/entity/user-entity";
import { UserRepositories } from "../../ports/user-port";
import { GetAllUsersUseCase } from "../get-all-users-use-case";
import { MockifyPartial } from "./mappers/instanceToInstanceMocked";

test('should call userRepository delete', async()=>{
    const user = new User({
      id: "123",
      name: 'matheus',
      email: 'matheus@gmail.com',
      role: "Admin"
    })
  const userRepositoryMock: MockifyPartial<UserRepositories> = {
    find: jest.fn().mockResolvedValue([user,user])
  };
  const getAllUsersUseCase = new GetAllUsersUseCase(userRepositoryMock as UserRepositories);
  const userNew = await getAllUsersUseCase.execute();
    expect(userNew).toEqual([
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    },
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }])
})