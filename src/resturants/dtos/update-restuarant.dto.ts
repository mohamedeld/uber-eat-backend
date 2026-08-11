import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

@ArgsType()
export class UpdateRestaurantDto {
  @Field((type) => String, { nullable: true })
  @IsString()
  @Length(5, 10)
  @IsOptional()
  name?: string;

  @Field((type) => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isVegan?: boolean;

  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  address?: string;

  @Field((type) => String, { nullable: true })
  @IsString()
  @IsOptional()
  ownersName?: string;
}
