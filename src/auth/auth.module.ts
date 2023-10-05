import { UsersModule } from 'src/users/users.module';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { LocalStrategy } from './shared/local.strategy';


@Module({
    imports: [UsersModule],
    controllers: [],
    providers: [AuthService, LocalStrategy], 
})
export class AuthModule {}
