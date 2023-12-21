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
import { AppWhereUniqueInput } from "../../app/base/AppWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DestinationCalendarListRelationFilter } from "../../destinationCalendar/base/DestinationCalendarListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CredentialWhereInput {
  @ApiProperty({
    required: false,
    type: () => AppWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppWhereUniqueInput)
  @IsOptional()
  @Field(() => AppWhereUniqueInput, {
    nullable: true,
  })
  app?: AppWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendarListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DestinationCalendarListRelationFilter)
  @IsOptional()
  @Field(() => DestinationCalendarListRelationFilter, {
    nullable: true,
  })
  destinationCalendars?: DestinationCalendarListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  key?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  typeField?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { CredentialWhereInput as CredentialWhereInput };
