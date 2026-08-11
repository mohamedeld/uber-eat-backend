import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateAccountDto } from './dtos/create-user.dto';
import { BadRequestException } from 'src/error-handling/bad-request-exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createAccount(body: CreateAccountDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: body.email },
    });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    const user = this.userRepository.create(body);
    return await this.userRepository.save(user);
  }
}
