import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column({ nullable:true })
    isbn: string;

    @Column({ nullable:true})
    editorial: string;

    @Column({ type:'int', nullable:true })
    ano: number;

    @Column({ nullable: true })
    genero: string;

    @Column()
    idioma: string;

    @Column()
    numeroPaginas: number;

    @Column()
    ubicacion: string;

    @Column()
    imagen1: string;

    @Column()
    imagen2: string;

    @Column()
    imagen3: string;
}
