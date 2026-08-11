import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entity/restaurant.entity';
import { RestuarantsService } from './restuarnts.service';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restuarant.dto';

@Resolver(() => Restaurant)
export class ResturantsResolver {
  constructor(private readonly restuarantsService: RestuarantsService) {}
  @Query(() => [Restaurant])
  async getResturants(): Promise<Restaurant[]> {
    return await this.restuarantsService.getAllRestaurants();
  }

  @Mutation(() => Restaurant)
  async createResturant(
    @Args() body: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restuarantsService.createRestaurant(body);
  }

  @Mutation(() => Restaurant)
  async updateResturant(
    @Args('id') id: number,
    @Args() body: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return await this.restuarantsService.updateRestaurant(id, body);
  }
}
