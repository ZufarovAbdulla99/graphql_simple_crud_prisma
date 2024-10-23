import { forwardRef, Module } from '@nestjs/common';
import { CarResolver } from './car.resolver';
import { CarService } from './car.service';
import { PrismaModule } from 'src/prisma';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [CarResolver, CarService],
})
export class CarModule {}
