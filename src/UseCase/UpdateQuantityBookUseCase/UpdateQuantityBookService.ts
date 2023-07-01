import { Book } from "@prisma/client";
import { prisma } from "../../Prisma/prisma-client";
import { IUpdateQuantityBook } from "./UpdateQuantityBookDTOS";

export class UpdateQuantityBookService {

  async update( { id, quantity }: IUpdateQuantityBook  ): Promise <Book> {

    const updateQuantityBook = await prisma.book.update( {
      where: {
        id,
      },
      data: {
        quantity,
      },
    } )

    return updateQuantityBook
  }
}