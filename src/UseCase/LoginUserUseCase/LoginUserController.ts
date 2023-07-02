import { Response, Request } from "express";
import { LoginUserService } from "./LoginUserService";

export class LoginUserController {
  async handle(req: Request, res: Response) {

    const { email, password } = req.body    

    const loginUserService = new LoginUserService()

    const resultLogin = await loginUserService.login( {email, password} )

    return res.status(200).send(resultLogin)
  }
}