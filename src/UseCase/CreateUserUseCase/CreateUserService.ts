import { User } from "@prisma/client";
import { prisma } from "../../Prisma/prisma-client";
import { ICreateUserDTOS } from "./CreateUserDTOS";

export class CreateUserService {
  async execute ( {name, email, password }: ICreateUserDTOS ): Promise <User> {

    const userAlreadyExists = await prisma.user.findMany({
      where: {
        email,
      }
    })

    if (userAlreadyExists.length > 0 ) {
      throw new Error("User Already Exists");
      
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