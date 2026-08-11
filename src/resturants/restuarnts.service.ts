import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entity/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { NotFoundException } from 'src/error-handling/not-found-exception';

@Injectable()
export class RestuarantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantsRepository: Repository<Restaurant>,
  ) {}
  async getAllRestaurants(): Promise<Restaurant[]> {
    return await this.restaurantsRepository.find();
  }

  async createRestaurant(body: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.restaurantsRepository.create(body);
    return await this.restaurantsRepository.save(restaurant);
  }

  async updateRestaurant(
    id: number,
    body: Partial<CreateRestaurantDto>,
  ): Promise<Restaurant> {
    const restaurant = await this.restaurantsRepository.findOneBy({ id });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with id ${id} not found`);
    }
    Object.assign(restaurant, body);
    return await this.restaurantsRepository.save(restaurant);
  }
}
