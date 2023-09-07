import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string | unknown | null | undefined;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string | unknown | null | undefined;

  @IsString()
  @IsNotEmpty()
  phone: string | unknown | null | undefined;

  @IsString()
  @IsNotEmpty()
  question: string | unknown | null | undefined;
}
