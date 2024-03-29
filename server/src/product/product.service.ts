import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { FileService } from 'src/file/file.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {

  
  constructor(private readonly prisma:PrismaService,
    private readonly fileService: FileService){}

    async create(createProductDto: CreateProductDto , image) {

      const category = await this.prisma.productCategory.findUnique({where: {id:+createProductDto.productId} })
  
      if(!category){
        throw new HttpException('Такой категории нет', HttpStatus.BAD_REQUEST)
      }
  
  
  
      const filePath = await this.fileService.createFile(image , createProductDto.title, 'product',category.title  )
  
      const data={
        title: createProductDto.title,
        productCategoryId : +createProductDto.productId,
        description: createProductDto.description,
        price : createProductDto.price.toString(),
        img: filePath
      }
  
      const newService = this.prisma.product.create({data}) 
      return newService
    }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findAllByCategoryid(productCategoryId:number){

    const products = await this.prisma.product.findMany({where:{productCategoryId} })

    if(!products){
      throw new NotFoundException('Нет продукта с такой категорией')
    }

    return products

  }

  async findOne(id: number) {

    const product = await this.prisma.product.findUnique({where: {id} })

    if(!product){
      throw new NotFoundException('Такого продукта нет')
    }

    return product;
  }

  async update(id: number, updateProductDto: Partial<Product> , image?) {

    const product = await this.prisma.product.findUnique({where: {id} })
    const category = await this.prisma.productCategory.findFirst({
      where:{
        products:{
          some:{
            id
          }
        }
      }
    })

    if(!product){
      throw new NotFoundException('Такого продукта нет')
    }
    if(image){
      const filePath = await this.fileService.createFile(image , updateProductDto.title, 'product',category.title  )
      updateProductDto.img = filePath
      console.log(filePath)
    }
    console.log(category)

    return await this.prisma.product.update({where: {id} , data: updateProductDto });
  }

  async remove(id: number) {
    console.log(id)
    const product = await this.prisma.product.findUnique({where: {id} })
    console.log(product)

    return await this.prisma.product.delete({where: {id } });
  }
}
