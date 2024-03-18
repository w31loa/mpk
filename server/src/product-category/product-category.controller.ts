import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductCategory, User } from '@prisma/client';

@Controller('product-category')
export class ProductCategoryController {
  constructor(private readonly productCategoryService: ProductCategoryService) {}


  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async create(@Body() createProductCategoryDto: CreateProductCategoryDto ,@UploadedFile()image  ) {
    return await this.productCategoryService.create(createProductCategoryDto, image);
  }

  @Get()
  findAll() {
    return this.productCategoryService.findAll();
  }

  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.productCategoryService.findOne(+id);
  }

  @UseInterceptors(FileInterceptor('image'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductCategoryDto: Partial<ProductCategory> , @UploadedFile()image? ) {
    return this.productCategoryService.update(+id, updateProductCategoryDto , image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCategoryService.remove(+id);
  }
}
