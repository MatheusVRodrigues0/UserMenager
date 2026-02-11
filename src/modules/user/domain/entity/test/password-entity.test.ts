import { Password } from "../password-entity"

test('Password has less of 8 charecteres', () => {
  expect(() =>Password.create('1234567')).toThrow('Low password');
})

test('Password has more of 128 charecteres', () => {
  expect(() =>Password.create('&;8_/9#u/?x{VEd%;xNa*)5?B;e%fVz$.NPW5$#FBJ&DXhK6+tW9?wCMrYMgz=wvYT8q)_;]&n(r.%f)QX6(:SF_{y[3V(7%BDxavVqPS;{ADayE2RUi9N2T}qp@*Hm28')).toThrow('Long Password');
})

test('Password must include uppercase in password', () => {
  expect(() =>Password.create('12345678')).toThrow('Must include uppercase in password');
})

test('Password must include lowercase in password', () => {
  expect(() =>Password.create('1234567A')).toThrow('Must include lowercase in password');
})

test('Password must include number in password', () => {
  expect(() =>Password.create('asdASDas')).toThrow('Must include number in password');
})
test('Password Must includ special character in password', () => {
  expect(() =>Password.create('asdASD12')).toThrow('Must special character');
})
test('Password Valid', () => {
  const password = Password.create('asdASD12@')
  expect(password).toBeInstanceOf(Password);
  expect(password.password).toBe('asdASD12@');
})