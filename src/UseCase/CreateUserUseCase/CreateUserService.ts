import { User } from "@prisma/client";
import { prisma } from "../../Prisma/prisma-client";
import { ICreateUserDTOS } from "./CreateUserDTOS";
import  { UserAlreadyExists } from "../Errors/UserAlreadyExists"

export class CreateUserService {
  async execute ( {name, email, password }: ICreateUserDTOS ): Promise <User> {

    const userAlreadyExists = await prisma.user.findMany({
      where: {
        email,
      }
    })

    if (userAlreadyExists.length > 0 ) {
      
      throw new UserAlreadyExists("The user already exists at the system.")
    }

    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return createUser
  }
}