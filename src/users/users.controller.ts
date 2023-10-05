import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './shared/user.service/user.service';
import { User } from './shared/user/user';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private userService :UserService
    ){ }
    
    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll() : Promise<User[]> {
        return this.userService.getAll();    
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string) : Promise<User> {
        return this.userService.getById(id);    
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() user: User): Promise<User>{
        return this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string,@Body() user: User): Promise<User>{
        return this.userService.update(id, user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.userService.delete(id);
    }



}
