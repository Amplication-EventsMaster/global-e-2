/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResetPasswordRequestWhereInput } from "./ResetPasswordRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResetPasswordRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResetPasswordRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => ResetPasswordRequestWhereInput)
  @IsOptional()
  @Field(() => ResetPasswordRequestWhereInput, {
    nullable: true,
  })
  every?: ResetPasswordRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResetPasswordRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => ResetPasswordRequestWhereInput)
  @IsOptional()
  @Field(() => ResetPasswordRequestWhereInput, {
    nullable: true,
  })
  some?: ResetPasswordRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResetPasswordRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => ResetPasswordRequestWhereInput)
  @IsOptional()
  @Field(() => ResetPasswordRequestWhereInput, {
    nullable: true,
  })
  none?: ResetPasswordRequestWhereInput;
}
export { ResetPasswordRequestListRelationFilter as ResetPasswordRequestListRelationFilter };
