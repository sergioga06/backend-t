import { IsEmail, IsNotEmpty, IsString, MinLength, IsArray, IsUUID } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsArray()
  @IsUUID('4', { each: true })
  roleIds?: string[];
}