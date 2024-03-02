import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { FileService } from 'src/file/file.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class ServiceService {
 

  constructor(private readonly prisma:PrismaService,
    private readonly fileService: FileService){}
   
  async create(createServiceDto: CreateServiceDto , image) {

    const category = await this.prisma.serviceCategory.findUnique({where: {id:+createServiceDto.serviceId} })

    if(!category){
      throw new HttpException('Такой категории нет', HttpStatus.BAD_REQUEST)
    }



    const filePath = await this.fileService.createFile(image , createServiceDto.title, 'product',createServiceDto.title  )

    const data={
      title: createServiceDto.title,
      serviceId : +createServiceDto.serviceId,
      description: createServiceDto.description,
      price : createServiceDto.price.toString(),
      img: filePath
    }

    const newService = this.prisma.service.create({data}) 
    return newService
  }

  findAll() {
    return `This action returns all service`;
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: Partial<User>) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
