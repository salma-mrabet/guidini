import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
} from 'class-validator';


export class CreateProductDto {
    


  @IsNotEmpty()
  @ApiProperty({
    description: 'product name',
    required: true,
  })
  productname: string;


  @ApiProperty({
    description: 'Product Brand',
  })
  @IsString()
  brand: string;

  @ApiProperty({
    description: 'Quantity in stock',
  })
  @IsString()
  quantityInStock: string;


  @ApiProperty({
    description: 'quantity Recommended',
  })
  @IsString()
  @IsOptional()
  quantityRecommended: string;



}