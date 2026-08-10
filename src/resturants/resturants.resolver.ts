import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entity/restaurant.entity';

@Resolver(() => Restaurant)
export class ResturantsResolver {
  @Query(() => Restaurant)
  getResturants(): Restaurant {
    return {
      name: 'Mohamed Elrfaay',
    };
  }
}
