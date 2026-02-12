import { User } from "../../../domain/entity/user-entity";
import { UserRepositories } from "../../ports/user-port";
import { GetUserByIdUseCase } from "../get-user-by-id-use-case";
import { MockifyPartial } from "./mappers/instanceToInstanceMocked";

test('should call userRepository delete', async()=>{
    const user = new User({
      id: "123",
      name: 'matheus',
      email: 'matheus@gmail.com',
      role: "Admin"
    })
  const userRepositoryMock: MockifyPartial<UserRepositories> = {
    findById: jest.fn().mockResolvedValue(user)
  };
  const getUserByIdUseCase = new GetUserByIdUseCase(userRepositoryMock as UserRepositories);
  const userNew = await getUserByIdUseCase.execute(user.id!);
    expect(userNew).toEqual({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    })
})