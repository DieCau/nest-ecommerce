import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Products')
export class ProductsEntity {
    @PrimaryGeneratedColumn() id:string;
}
