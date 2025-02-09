import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,

} from "typeorm";
// import { Length, Min } from "class-validator";
import { ObjectType, Field, Int, InputType } from "type-graphql";

import { ObjectId } from "../types";
import Continent from "./Continent";

@Entity()
@ObjectType()
export default class Country extends BaseEntity {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ length: 50 })
  @Field()
  code: string;

  @Column()
  @Field()
  nom: string;

  @Column()
  @Field()
  emoji: string;

  // @ManyToOne(() => Continent, (c) => c.countries, {
  //   cascade: true,
  //   onDelete: "CASCADE",
  // })
  // @Field()
  // continent: Continent;
  @ManyToOne(() => Continent, continent => continent.countries, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @Field(() => Continent)
  continent: Continent;
  
}

@InputType()
export class NewCountryInput {
  @Field()
  code: string;

  @Field()
  nom: string;

  @Field()
  emoji: string;

  
  @Field(() => ObjectId)
  continent: ObjectId;
 
}

