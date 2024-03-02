import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2'
import { User } from '@prisma/client';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService:UserService,
        private readonly jwtService:JwtService
    ){}



    async validateUser(email:string , password: string){
        const user = await this.userService.findOneByEmail(email)
        const isPasswordVerify = await argon2.verify(user.password_hash, password)
        if(user && isPasswordVerify){
            return user
        }

        throw new UnauthorizedException('Email or password are wrong') 
    }

    async login(user:User){
        const payload = {id:user.id, email:user.email}

        return {
            id: user.id,
            email: user.email,
            access_token: this.jwtService.sign(payload)
        }
    }

}
