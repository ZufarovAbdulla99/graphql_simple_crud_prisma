import { Inject, Injectable } from '@nestjs/common';
import { Car } from './models';
import { PrismaService } from 'src/prisma';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async createCar(payload: CreateCarDto){
    const car = await this.prisma.car.create({
      data: payload
    })
    return car
  }

  async getAllCars() {
    return await this.prisma.car.findMany()
  }

  async getCarById(id: number) {
    const car = await this.prisma.car.findUniqueOrThrow({where: {id}})
    return car
  }

  async updateCar(payload: UpdateCarDto){
    const updatedCar = await this.prisma.car.update({
      where: {id: payload.id},
      data: {
        brand: payload.brand,
        price: payload.price,
        year: payload.year,
        color: payload.color,
      }
    })
    return updatedCar
  }

  async deleteCar(id: number){
    const car = await this.prisma.car.delete({
      where: { id }
    })
    return car
  }
}
