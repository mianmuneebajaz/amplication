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
import { HostelWhereInput } from "./HostelWhereInput";
import { Type } from "class-transformer";
import { HostelOrderByInput } from "./HostelOrderByInput";

@ArgsType()
class HostelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HostelWhereInput,
  })
  @Field(() => HostelWhereInput, { nullable: true })
  @Type(() => HostelWhereInput)
  where?: HostelWhereInput;

  @ApiProperty({
    required: false,
    type: [HostelOrderByInput],
  })
  @Field(() => [HostelOrderByInput], { nullable: true })
  @Type(() => HostelOrderByInput)
  orderBy?: Array<HostelOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HostelFindManyArgs as HostelFindManyArgs };
