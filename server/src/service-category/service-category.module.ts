import { Module } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { ServiceCategoryController } from './service-category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [PrismaModule, FileModule],
  controllers: [ServiceCategoryController],
  providers: [ServiceCategoryService],
})
export class ServiceCategoryModule {}
