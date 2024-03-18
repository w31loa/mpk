
import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { WorksService } from './works.service';
import { Prisma, Works  } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateWorksDto } from './works.dto';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}



  @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(@Body() createWorkDto: CreateWorksDto, @UploadedFile()image) {
    return this.worksService.create(createWorkDto , image);
  }

  @Get()
  findAll() {
    return this.worksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worksService.findOne(+id);
  }

  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: Partial<Works>,  @UploadedFile()image?) {


    return this.worksService.update(+id, updateWorkDto , image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worksService.remove(+id);
  }
}
