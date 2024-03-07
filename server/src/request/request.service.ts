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

  findAll() {
    return `This action returns all request`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
