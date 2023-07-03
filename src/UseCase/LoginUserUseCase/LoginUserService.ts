import { ILoginUserDTOS } from "./LoginUserDTOS";
import { UserAlreadyExists } from "../Errors/UserAlreadyExists";
import { prisma } from "../../Prisma/prisma-client";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";



export class LoginUserService {
  
  async login( { email, password }: ILoginUserDTOS ) {

    const user = await prisma.user.findUnique({
      where: {
        email,
      },     
    })

    if (!user) {
      
      throw new UserAlreadyExists("Email or password are invalids")

    }

    const verifyPassword = await bcrypt.compare(password, user.password )
    
    if (!verifyPassword) {

      throw new UserAlreadyExists("Email or password are invalids")

    }

    const {password: _, ...userAuthenticated} = user

    const tokenJwt = jwt.sign( {id: user.id }, process.env.JWT_PASS ?? '',
     {
      expiresIn: '6h'
    } )  

    return {
      user: userAuthenticated,
      token: tokenJwt,
    }
  }
}