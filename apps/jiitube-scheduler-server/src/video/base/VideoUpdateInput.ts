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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ScheduleUpdateManyWithoutVideosInput } from "./ScheduleUpdateManyWithoutVideosInput";
import { Type } from "class-transformer";
import { VideoDetailsUpdateManyWithoutVideosInput } from "./VideoDetailsUpdateManyWithoutVideosInput";

@InputType()
class VideoUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => ScheduleUpdateManyWithoutVideosInput,
  })
  @ValidateNested()
  @Type(() => ScheduleUpdateManyWithoutVideosInput)
  @IsOptional()
  @Field(() => ScheduleUpdateManyWithoutVideosInput, {
    nullable: true,
  })
  schedules?: ScheduleUpdateManyWithoutVideosInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => VideoDetailsUpdateManyWithoutVideosInput,
  })
  @ValidateNested()
  @Type(() => VideoDetailsUpdateManyWithoutVideosInput)
  @IsOptional()
  @Field(() => VideoDetailsUpdateManyWithoutVideosInput, {
    nullable: true,
  })
  videoDetailsItems?: VideoDetailsUpdateManyWithoutVideosInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  videoId?: string | null;
}

export { VideoUpdateInput as VideoUpdateInput };