import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  addressId: string;

  @Column({ type: 'varchar', length: '100' })
  addressMain: string;

  @Column({ type: 'varchar', length: '100' })
  addressDetail: string;

  @ManyToOne(() => User)
  user: User;
}
