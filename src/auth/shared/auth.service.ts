import { Injectable } from '@nestjs/common';
import { UserService } from './../../users/shared/user.service/user.service';

@Injectable()
export class AuthService { 

    constructor(
        private userService: UserService,
        ) { }

        async validateUser(userEmail: string, userPassword: string){
            const user = await this.userService.getByEmail(userEmail);
            if(user && user.password === userPassword) {
                const {_id, name, email} = user;
                return {id: _id, name, email};
            }
            return null;
        }
}
