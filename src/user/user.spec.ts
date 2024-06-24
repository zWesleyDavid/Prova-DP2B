import { User } from './user.module';

describe('User', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
