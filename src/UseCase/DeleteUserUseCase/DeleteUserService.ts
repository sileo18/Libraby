import { User } from "@prisma/client";
import { IDeleteUserDTOS } from "./DeleteUserDTOS";
import { prisma } from "../../Prisma/prisma-client";

export class DeleteUserService {
  async execute ( { id }: IDeleteUserDTOS ): Promise <User> {

    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    })

    return deleteUser
  }
}