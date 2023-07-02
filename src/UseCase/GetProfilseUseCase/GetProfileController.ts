import { Request, Response } from "express";
import { GetProfileService } from "./GetProfileService";
import { UserAlreadyExists } from "../Errors/UserAlreadyExists";

export class GetProfileController {

  async handle(req: Request, res: Response) {

    const { authorization } = req.headers

    if (!authorization) {

      throw new UserAlreadyExists('Não Autorizado')

    }

    const getProfileService = new GetProfileService()

    const resultGet = getProfileService.getProfile( { authorization } )

  }
}