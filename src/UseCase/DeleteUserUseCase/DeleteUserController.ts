import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

export class DeleteUserController {
  async handle (req: Request, res: Response) {

    const { id } = req.params

    const deleteUserService = new DeleteUserService()

    const resultDelete = await deleteUserService.execute( { id } )

    return res.status(204).json(resultDelete)
  }
}