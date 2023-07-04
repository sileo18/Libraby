import { Request, Response } from "express";
import { prisma } from "../../Prisma/prisma-client";
import { CreateRentService } from "./CreateRentService";

export class CreateRentController {

  async handle(req: Request, res: Response) {

    const { email } = req.body

    const endsAt = new Date('2024-07-11');

    const user = await prisma.user.findUnique({
      where: {
        email,
      },      
      select: {
        id: true
      }
    })

    if (user === null) {
      throw new Error('')
    }

     const { bookId } = req.params   

    const createRentService = new CreateRentService()  

    const resultCreate = await createRentService.create( { userId: user.id, bookId, endsAt} )    

    return res.status(201).json(resultCreate)  

  }
}