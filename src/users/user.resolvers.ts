import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateAccountDto } from './dtos/create-user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createAccount(@Args() body: CreateAccountDto): Promise<User> {
    return await this.usersService.createAccount(body);
  }
}
