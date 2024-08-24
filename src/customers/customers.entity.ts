import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Customers')
export class CustomersEntity {
    @PrimaryGeneratedColumn() id:string;
}
