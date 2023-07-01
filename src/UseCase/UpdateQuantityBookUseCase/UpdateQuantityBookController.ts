import { Request, Response } from "express";
import { UpdateQuantityBookService } from "./UpdateQuantityBookService";

export class UpdateQuantityBookController {

  async handle(req: Request, res: Response) {

    const { id } = req.params

    const { quantity } = req.body

    const updateQuantityBookService = new UpdateQuantityBookService()

    const resultUpdate = await updateQuantityBookService.update( { id, quantity } )

    return res.status(200).json(resultUpdate)

  }
}