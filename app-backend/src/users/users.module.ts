import { Module } from '@nestjs/common';
import { UserService } from './shared/user.service/user.service';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])],
    controllers: [UsersController],
    providers: [UserService],
    exports:[UserService],
})
export class UsersModule {}
