/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VideoDetailsWhereInput } from "./VideoDetailsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class VideoDetailsCountArgs {
  @ApiProperty({
    required: false,
    type: () => VideoDetailsWhereInput,
  })
  @Field(() => VideoDetailsWhereInput, { nullable: true })
  @Type(() => VideoDetailsWhereInput)
  where?: VideoDetailsWhereInput;
}

export { VideoDetailsCountArgs as VideoDetailsCountArgs };
