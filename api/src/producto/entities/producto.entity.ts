import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        nombre: string;

        @Column()
        categoria: string;

        @Column({ type: 'float' })
        precio: number;

        @Column({ type: 'int'})
        stock: number;
        
}
