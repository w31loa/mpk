import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as argon2 from 'argon2'

@Injectable()
export class UserService {

  constructor(private readonly prisma:PrismaService){}

  async create(createUserDto: CreateUserDto) {

    const existUser = await this.findOneByEmail(createUserDto.email)

    if(existUser){
      throw new HttpException('This email already exist', HttpStatus.BAD_REQUEST)
    }

    const data = {
      email: createUserDto.email,
      password_hash: await argon2.hash(createUserDto.password)
    }

    return this.prisma.user.create({data});
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({where: {id} });
  }

  async findOneByEmail(email:string){
    return await this.prisma.user.findUnique({where: {email} })
  }

  async update(id: number, updateUserDto: Partial<User>) {
    return await  this.prisma.user.update({where: {id} , data: updateUserDto});
  }

  async remove(id: number) {
    return await this.prisma.user.delete({where: {id} });
  }
}
