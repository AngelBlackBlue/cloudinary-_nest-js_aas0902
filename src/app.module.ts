import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { ConfigModule} from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    FileModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}