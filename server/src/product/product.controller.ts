import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Product } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async create(@Body() createProductDto: CreateProductDto ,@UploadedFile()image  ) {
    return await this.productService.create(createProductDto, image);
  }


  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('all/:id')
  findAllByCategoryId(@Param('id') id: string) {
    return this.productService.findAllByCategoryid(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }


  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto:Partial<Product> , @UploadedFile()image?) {
    return this.productService.update(+id, updateProductDto, image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
