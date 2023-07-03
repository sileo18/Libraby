import { Request, Response } from "express";
import { GetProfileService } from "./GetProfileService";
import { Unauthorized } from "../Errors/Unauthorized";

export class GetProfileController {

  async handle(req: Request, res: Response) {

    const { authorization } = req.headers

    if (!authorization) {

      throw new Unauthorized("Unauthorized Request", 401)

    }

    const getProfileService = new GetProfileService()

    const resultGet = await getProfileService.getProfile( { authorization } )

    return res.status(200).json(resultGet)

  }
}