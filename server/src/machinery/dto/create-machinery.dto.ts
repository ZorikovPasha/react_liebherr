import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMachineryDto {
  @IsString()
  @IsNotEmpty()
  name: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  liftingCapacity: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  arrowLength: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  mainArrowLength: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  maxHeight: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  maxRadius: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  speed: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  extension: string | null | undefined | unknown;
  @IsString()
  @IsNotEmpty()
  price: string | null | undefined | unknown;
}
