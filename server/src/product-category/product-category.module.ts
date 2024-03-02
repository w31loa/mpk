import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryController } from './product-category.controller';
import { FileModule } from 'src/file/file.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [FileModule, PrismaModule],
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
})
export class ProductCategoryModule {}
