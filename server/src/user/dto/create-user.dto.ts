import { $Enums, User } from "@prisma/client";

export class CreateUserDto{
    email: string;
    password: string;
    role: $Enums.Role;
}
