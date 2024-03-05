import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { FileService } from 'src/file/file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ServiceCategory, User } from '@prisma/client';

@Controller('service-category')
export class ServiceCategoryController {
  constructor(private readonly serviceCategoryService: ServiceCategoryService) {}



  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async create(@Body() createServiceCategoryDto: CreateServiceCategoryDto ,@UploadedFile()image  ) {
    return await this.serviceCategoryService.create(createServiceCategoryDto, image);
  }




  @Get()
  findAll() {
    return this.serviceCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceCategoryDto: Partial<ServiceCategory>) {
    return this.serviceCategoryService.update(+id, updateServiceCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceCategoryService.remove(+id);
  }
}
