import { Column, Entity } from "typeorm";
import { Base } from "../utils/base";
import { IsEmail } from "class-validator";


@Entity('user')
export class UserEntity extends Base {


  @Column({ unique:true})
  @IsEmail()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: '' })
  name: string;

}