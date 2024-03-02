import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { FileModule } from 'src/file/file.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [FileModule, PrismaModule],
  controllers: [ServiceController, ],
  providers: [ServiceService],
})
export class ServiceModule {}
