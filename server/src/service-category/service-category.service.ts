import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileService } from 'src/file/file.service';
import { ServiceCategory } from '@prisma/client';

@Injectable()
export class ServiceCategoryService {

  constructor(private readonly prisma:PrismaService,
              private readonly fileService: FileService){}


  
  async create(createServiceCategoryDto: CreateServiceCategoryDto , image) {
    const filePath = await this.fileService.createFile(image , createServiceCategoryDto.title, 'service',createServiceCategoryDto.title  )

    const data={
      title: createServiceCategoryDto.title,
      description: createServiceCategoryDto.description,
      img: filePath
    }

    const newCategory = this.prisma.serviceCategory.create({data})
    return newCategory
  }
  

  async findAll() {
    return await this.prisma.serviceCategory.findMany() ;
  }

  async findOne(id: number) {

    const category = await this.prisma.serviceCategory.findUnique({where: {id} , select:{
      id: true ,
      title:true ,
      img:true,
      services:true
    }})

    if(!category){
      throw new NotFoundException('Такой категории нет')
    }

    return category;
  }

  async update(id: number, updateServiceCategoryDto:Partial<ServiceCategory> , image?) {

    const category = await this.prisma.serviceCategory.findUnique({where: {id} })

    if(!category){
      throw new NotFoundException('Такой категории нет')
    }

    if(image){
      const filePath = await this.fileService.createFile(image , updateServiceCategoryDto.title, 'service',updateServiceCategoryDto.title  )
      updateServiceCategoryDto.img = filePath
      console.log(filePath)
    }

    return await this.prisma.serviceCategory.update({where:{id} , data: updateServiceCategoryDto});
  }

  async remove(id: number) {

    const category = await this.prisma.serviceCategory.findUnique({where: {id} })

    if(!category){
      throw new NotFoundException('Такой категории нет')
    }

    return await this.prisma.serviceCategory.delete({where: {id} });
  }
}
