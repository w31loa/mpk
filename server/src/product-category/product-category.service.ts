import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { FileService } from 'src/file/file.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class ProductCategoryService {

  
  constructor(private readonly prisma:PrismaService,
    private readonly fileService: FileService){}
   
  async create(createProductCategoryDto: CreateProductCategoryDto , image) {
    const filePath = await this.fileService.createFile(image , createProductCategoryDto.title, 'product',createProductCategoryDto.title  )

    const data={
      title: createProductCategoryDto.title,
      description: createProductCategoryDto.description,
      img: filePath
    }

    const newCategory = this.prisma.productCategory.create({data})
    return newCategory
  }

  findAll() {
    return `This action returns all productCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: number, updateProductCategoryDto: Partial<User>) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
