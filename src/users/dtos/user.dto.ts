import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'This is user mail' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: 'This is user password' })
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'This is user role' })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
