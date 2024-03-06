import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { AddItemDto } from './dto/addItem.dto';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post()
  addItemToBacket(@Body() createBasketDto: AddItemDto) {
    return this.basketService.addItemToBacket(createBasketDto);
  }

  @Get()
  findAll() {
    return this.basketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    return this.basketService.getBasketByUserId(+id);
  }

  @Patch()
  update(@Body() updateBasketDto: UpdateBasketDto) {
    console.log(updateBasketDto)
    return this.basketService.update(updateBasketDto);
  }

  @Delete(':user/:product')
  remove(@Param('user') user: string , @Param('product') product: string) {
    return this.basketService.remove(+user, +product);
  }
}
