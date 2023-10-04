import { Injectable } from '@nestjs/common';
import { User } from '../user/user';

@Injectable()
export class UserService {
    users: User[] =[
        {
            id: 1, 
            name: 'Toniko Pimenta', 
            username: 'tonikopimenta',
            password: 'mudar123',
            canCreate: true,
            canEdit: true
        },
        {
            id: 2, 
            name: 'John Cena', 
            username: 'johncena',
            password: 'ucantseeme',
            canCreate: false,
            canEdit: false
        }
    ]

    getAll(){
        return this.users;
    }

    getById(id: number){
        const user = this.users.find((value) => value.id == id);
        return user;
    }

    create(user: User){
        let lastId = 0;
        if (this.users.length > 0) {
            lastId = this.users[this.users.length - 1].id;
        }

        user.id = lastId +1;
        this.users.push(user);

        return user;
    }

    update(user: User){
        const userArray = this.getById(user.id);
        if(userArray) {
            userArray.name = user.name;
            userArray.username = user.username;
            userArray.password = user.password;
            userArray.canCreate = user.canCreate;
            userArray.canEdit = user.canEdit;
        }

        return userArray;

    }

    delete(id: number){
        const index = this.users.findIndex((value) => value.id == id);
        this.users.splice(index, 1);
    }
}
