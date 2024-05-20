import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class StorePayableRequest {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly value: number;

  @IsNotEmpty()
  @IsDate()
  readonly emissionDate: Date;

  @IsNotEmpty()
  @IsString()
  readonly assignor: string;
}
