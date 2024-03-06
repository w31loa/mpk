import { PartialType } from '@nestjs/mapped-types';
import { CreateBasketDto } from './create-basket.dto';

export class UpdateBasketDto{
    userId: number
    productId:number
    count: number
}
