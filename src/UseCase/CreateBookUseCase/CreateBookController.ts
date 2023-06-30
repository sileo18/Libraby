import { Request, Response } from "express";
import { CreateBookService } from "./CreateBookService";

export class CreateBookController {

  async handle (req: Request,res: Response ) {

    const { title, author, company, quantity } = req.body

    const createBook = new CreateBookService()

    const resultCreate = await createBook.execute( { title, author, company, quantity } )
    
    return res.status(201).json(resultCreate).send("Book Created Success")
  }
}