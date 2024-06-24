import { Entity, ObjectId, Column, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsArray } from 'class-validator';
 
@Entity()
export class Coquetel {
    @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    @IsString()
    name: string;

    @Column('simple-array')
    @IsArray()
    ingredients: string;

    @Column()
    @IsString()
    instructions: string;
}

export default Coquetel;