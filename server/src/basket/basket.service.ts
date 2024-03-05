import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddItemDto } from './dto/addItem.dto';

@Injectable()
export class BasketService {

  constructor(private readonly prisma:PrismaService){}

  async create(userId: number) {

    

    return  await this.prisma.basket.create({data: {userId}});
  }

  async addItemToBacket({userId , productId}:AddItemDto){

      const basket = await this.prisma.basket.findFirst({where:{userId} })

      if(!basket){
        throw new UnauthorizedException('Вы не авторизованны!')
      }

      const itemExist = await this.prisma.productsInBasket.findFirst({where:{
        basketId: basket.id,
        productId
      }})

      if(itemExist){
        return await this.prisma.productsInBasket.update({where: {id: itemExist.id} , data: { count:  itemExist.count+1} })
      }


      const data = {
        basketId: basket.id,
        productId,
        count: 1
      }

      const newItem = await this.prisma.productsInBasket.create({data})

      return newItem

  }

  
  async getBasketByUserId(id: number) {
    const basket = await this.prisma.basket.findFirst({where:{userId:id} })
    const basketId = basket.id


    
    
    return  await this.prisma.productsInBasket.findMany({where: {basketId} , select:{
      id:true,
      basketId:true,
      basket:{
        select:{
          userId: true
        }
      },
      product:true,
      count:true
    }});
  }
  
  findAll() {
    return `This action returns all basket`;
  }
  update(id: number, updateBasketDto: UpdateBasketDto) {
    return `This action updates a #${id} basket`;
  }

  async remove(userId:number , productId:number) {
    console.log(userId, productId)
    const basket = await this.prisma.basket.findFirst({where:{userId} })

    return await this.prisma.productsInBasket.deleteMany({where: {
      basketId: basket.id,
      productId:productId
    } });
  }
}
