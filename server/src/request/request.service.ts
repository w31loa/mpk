import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RequestService {

  constructor(private readonly prisma:PrismaService){}

  async create(createRequestDto: CreateRequestDto) {


    const basket = await this.prisma.basket.findFirst({where: {userId: createRequestDto.userId} })


    const data = {
      phoneNumber: createRequestDto.phoneNumber,
      name: createRequestDto.name,
      description: createRequestDto.description,
      date: createRequestDto.date,
      basketId: basket.id,
      userId: createRequestDto.userId,
      serviceId: createRequestDto.serviceId
    }
   
    const newReq = await this.prisma.request.create({data: data})

    return newReq;
  }


  async findAll() {
    return await this.prisma.request.findMany({
      include:{
        basket:{
          include:{
            products:{
              select:{
                product:true,
                count: true
              }
            }
          }
        },
        service: true
      },
      orderBy:{
        status: 'desc'
      }
    }) ;
  }


  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    
    return await this.prisma.request.update({
      where: {id},
      data: updateRequestDto
    });
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
