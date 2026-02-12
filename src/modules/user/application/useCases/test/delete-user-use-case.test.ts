import { UserRepositories } from "../../ports/user-port";
import { DeleteUserUseCase } from "../delete-user-use-case";
import { MockifyPartial } from "./mappers/instanceToInstanceMocked";

test('should call userRepository delete', async()=>{
  const userRepositoryMock: MockifyPartial<UserRepositories> = {
    delete: jest.fn()
  };
  const deleteUserUseCase = new DeleteUserUseCase(userRepositoryMock as UserRepositories);
  await deleteUserUseCase.execute('123');
  expect(userRepositoryMock.delete).toHaveBeenCalled();
})