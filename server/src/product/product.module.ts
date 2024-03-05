import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { FileModule } from 'src/file/file.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [FileModule, PrismaModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
