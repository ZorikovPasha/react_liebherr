import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
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

  @IsNumber()
  machineryId: number | unknown | null | undefined;
}
