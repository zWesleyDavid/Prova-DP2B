import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  route: string;

  @Column()
  method: string;

  @Column()
  responseTime: number;

  @CreateDateColumn()
  timestamp: Date;
}
