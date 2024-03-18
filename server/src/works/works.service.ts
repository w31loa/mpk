import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Works } from '@prisma/client';
import { FileService } from 'src/file/file.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWorksDto } from './works.dto';

@Injectable()
export class WorksService {

  constructor( private readonly prisma:PrismaService ,
                private readonly file:FileService){}

  async create(createWorkDto: CreateWorksDto , image) {
    
    const work = await this.prisma.works.findFirst({
      where: {title: createWorkDto.title}
    })

    if(work){
      throw new HttpException('Запись с таким названием уже существует' , HttpStatus.BAD_REQUEST)
    } 



    const fileName = await this.file.createFile(image , createWorkDto.title, 'work',createWorkDto.title  )
    createWorkDto.img = fileName
    const newWork  = await this.prisma.works.create({data: createWorkDto })

    return  newWork;
  }

  async findAll() {
    return await this.prisma.works.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} work`;
  }

  async update(id: number, updateWorkDto: Partial<Works> , image?) {

    const work = await this.prisma.works.findFirst({
      where:{id: updateWorkDto.id}
    })

    if(!work){
      throw new HttpException('Запись с таким названием не  существует' , HttpStatus.BAD_REQUEST)
    }

    if(image){
      const filePath = await this.file.createFile(image , updateWorkDto.title, 'work',updateWorkDto.title  )
      updateWorkDto.img = filePath
      console.log(filePath)
    }

    return await this.prisma.works.update({
      where: {id},
      data: updateWorkDto
    });
  }

  async remove(id: number) {
    return await this.prisma.works.delete({
      where: {id}
    });
  }
}
