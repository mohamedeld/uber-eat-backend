import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Length } from 'class-validator';

@ArgsType()
export class LoginUserDto {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  @Length(8, 30)
  password: string;
}
