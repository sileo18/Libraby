import { Book } from "@prisma/client";
import { prisma } from "../../Prisma/prisma-client";
import { ICreateBookDTOS } from "./CreateBookDTOS";
import { BookAlreadyExists } from "../Errors/BookAlreadyExists";

export class CreateBookService {
  async execute ( { title, author, company, quantity }: ICreateBookDTOS ): Promise <Book> {

    const bookAlreadyExists = await prisma.book.findFirst({
      where: {
        title,
        author,
      }
    })

    if (bookAlreadyExists) {
      
      throw new BookAlreadyExists("The books already exists at the system.")
    }

    const createBook = await prisma.book.create({
      data: {
        title,
        author,
        company,
        quantity,
      }
    })

    return createBook
  }
}