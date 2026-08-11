import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';
import type { UserRole } from '../entities/user.entity';

@ArgsType()
export class CreateAccountDto {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  @Length(8, 30)
  password: string;

  @Field(() => String)
  @IsString()
  role: UserRole;
}
