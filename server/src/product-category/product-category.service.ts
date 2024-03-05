import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { FileService } from 'src/file/file.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductCategory, User } from '@prisma/client';

@Injectable()
export class ProductCategoryService {

  
  constructor(private readonly prisma:PrismaService,
    private readonly fileService: FileService){}
   
  async create(createProductCategoryDto: CreateProductCategoryDto , image) {
    const title = createProductCategoryDto.title
    const category = await  this.prisma.productCategory.findFirst({where: {title} })

    if(category){
      throw new BadRequestException('Такая категория уже существует')
    }
    const filePath = await this.fileService.createFile(image , createProductCategoryDto.title, 'product',createProductCategoryDto.title  )

    const data={
      title: createProductCategoryDto.title,
      description: createProductCategoryDto.description,
      img: filePath
    }

    const newCategory = this.prisma.productCategory.create({data})
    return newCategory
  }

  async findAll() {
    return await this.prisma.productCategory.findMany();
  }

  async findOne(id: number) {

    const category = await this.prisma.productCategory.findUnique({where: {id} , select:{
      id:true,
      title: true,
      description: true,
      img: true,
      products: true
    }})

    if(!category){
      throw new NotFoundException('Такая категория не найдена')
    }

    return category;
  }

  async  update(id: number, updateProductCategoryDto: Partial<ProductCategory>) {

    const category = await this.prisma.productCategory.findUnique({where: {id} })

    if(!category){
      throw new NotFoundException('Такая категория не найдена')
    }

    return this.prisma.productCategory.update({where :{ id}, data:updateProductCategoryDto});
  }

  async remove(id: number) {

    const category = await this.prisma.productCategory.findUnique({where: {id} })

    if(!category){
      throw new NotFoundException('Такая категория не найдена')
    }

    return await this.prisma.productCategory.delete({where: {id} });
  }
}
