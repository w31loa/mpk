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

  async findOne(id: number) {

    const product = await this.prisma.product.findUnique({where: {id} })

    if(!product){
      throw new NotFoundException('Такого продукта нет')
    }

    return product;
  }

  async update(id: number, updateProductDto: Partial<Product>) {

    const product = await this.prisma.product.findUnique({where: {id} })

    if(!product){
      throw new NotFoundException('Такого продукта нет')
    }

    return await this.prisma.product.update({where: {id} , data: updateProductDto });
  }

  async remove(id: number) {

    const product = await this.prisma.product.findUnique({where: {id} })

    if(!product){
      throw new NotFoundException('Такого продукта нет')
    }

    return await this.prisma.product.delete({where: {id } });
  }
}
