import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Car } from './models';
import { CarService } from './car.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Resolver(() => Car)
export class CarResolver {
  constructor(private carService: CarService) {}

  @Mutation(() => Car)
  createCar(
    @Args('createCarDto', { type: () => CreateCarDto }) payload: CreateCarDto,
  ) {
    return this.carService.createCar(payload);
  }

  @Query(() => [Car])
  getAllCars() {
    return this.carService.getAllCars();
  }

  @Query(() => Car)
  getCarById(@Args('id', { type: () => Int }, ParseIntPipe) id: number) {
    return this.carService.getCarById(id);
  }

  @Mutation(() => Car)
  updateCar(
    @Args('updateCarDto', { type: () => UpdateCarDto }) payload: UpdateCarDto,
  ) {
    return this.carService.updateCar(payload);
  }

  @Mutation(() => Car)
  deleteCar(@Args('id', { type: () => Int }, ParseIntPipe) id: number) {
    return this.carService.deleteCar(id)
  }
}
