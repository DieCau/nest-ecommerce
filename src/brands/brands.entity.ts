import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Brands')
export class BrandsEntity {
    @PrimaryGeneratedColumn() id:string;
}
