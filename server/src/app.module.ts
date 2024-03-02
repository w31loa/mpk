import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceModule } from './service/service.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ServiceCategoryModule } from './service-category/service-category.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [UserModule, PrismaModule, ServiceModule, ProductModule, AuthModule, FileModule, ProductCategoryModule, ServiceCategoryModule, BasketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
