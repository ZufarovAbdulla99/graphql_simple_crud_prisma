import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarDto {
  @Field(() => String)
  brand: string;

  @Field(() => Int)
  price: number;

  @Field(() => String)
  color: string;

  @Field(() => Int)
  year: number;
}
