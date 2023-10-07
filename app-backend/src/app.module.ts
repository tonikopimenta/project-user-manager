import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://db_user:Pmsj5Ozs9eRaJSV8@cluster0.lgtvpbv.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
