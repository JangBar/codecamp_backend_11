import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ type: 'varchar', length: 100 })
  userName: string;

  @Column({ type: 'varchar', length: 100 })
  userPassword: string;

  @Column({ type: 'varchar', length: 100 })
  userEmail: string;

  @Column({ type: 'varchar', length: 100 })
  userPhone: string;

  @Column({ type: 'int' })
  userAge: number;

  @Column({ type: 'tinyint' })
  userGender: boolean;
}
