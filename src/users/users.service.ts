import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(user): Promise<User | undefined> {
    user.password = await this.hashPassword(user.password);
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  async hashPassword(password) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}
