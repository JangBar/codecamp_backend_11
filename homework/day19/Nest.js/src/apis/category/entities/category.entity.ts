import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  categoryId: string;

  @Column({ type: 'char', length: 5 })
  @Field(() => String)
  categoryName: string;
}
