import { Injectable } from '@nestjs/common';
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
  

  findAll() {
    return `This action returns all serviceCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceCategory`;
  }

  update(id: number, updateServiceCategoryDto:Partial<ServiceCategory>) {
    return `This action updates a #${id} serviceCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceCategory`;
  }
}
