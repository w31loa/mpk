import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service, User } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}



  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async create(@Body() createServiceDto: CreateServiceDto ,@UploadedFile()image  ) {
    return await this.serviceService.create(createServiceDto, image);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Get('all/:id')
  findAllByCategoryId(@Param('id') id: string) {
    return this.serviceService.findAllByCategoryid(+id);
  }


  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: Partial<Service>, @UploadedFile()image?) {
    return this.serviceService.update(+id, updateServiceDto, image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
