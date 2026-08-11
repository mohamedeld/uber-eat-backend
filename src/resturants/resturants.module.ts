import { Module } from '@nestjs/common';
import { ResturantsResolver } from './resturants.resolver';
import { RestuarantsService } from './restuarnts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entity/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [ResturantsResolver, RestuarantsService],
})
export class ResturantsModule {}
