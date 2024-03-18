import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { FileService } from 'src/file/file.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Service, User } from '@prisma/client';

@Injectable()
export class ServiceService {
 

  constructor(private readonly prisma:PrismaService,
    private readonly fileService: FileService){}
   
  async create(createServiceDto: CreateServiceDto , image) {

    const category = await this.prisma.serviceCategory.findUnique({where: {id:+createServiceDto.serviceId} })

    if(!category){
      throw new HttpException('Такой категории нет', HttpStatus.BAD_REQUEST)
    }



    const filePath = await this.fileService.createFile(image , createServiceDto.title, 'service',category.title  )

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

  async findAll() {
    return await this.prisma.service.findMany();
  }

  async findOne(id: number) {

    const service = await this.prisma.service.findUnique({where:{id}})

    if(!service){
      throw new NotFoundException('Такой услуги нету')
    }

    return service;
  }


  async findAllByCategoryid(productCategoryId:number){

    const products = await this.prisma.service.findMany({where:{
      serviceCategory: {
        id: productCategoryId
      }
    } })

    if(!products){
      throw new NotFoundException('Нет услуги с такой категорией')
    }

    return products

  }

  async update(id: number, updateServiceDto: Partial<Service>, image?) {

    const service = await this.prisma.service.findUnique({where:{id}})
    const category = await this.prisma.serviceCategory.findFirst({
      where:{
        services:{
          some:{
            id
          }
        }
      }
    })


    if(!service){
      throw new NotFoundException('Такой услуги нету')
    }
    

    if(image){
      const filePath = await this.fileService.createFile(image , updateServiceDto.title, 'service',category.title  )
      updateServiceDto.img = filePath
      console.log(filePath)
    }

    return await this.prisma.service.update({where:{id} , data: updateServiceDto});
  }

  async remove(id: number) {

    const service = await this.prisma.service.findUnique({where:{id}})

    if(!service){
      throw new NotFoundException('Такой услуги нету')
    }



    return await this.prisma.service.delete({where:{id} });
  }
}
