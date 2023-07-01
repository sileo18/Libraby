import { User } from "@prisma/client";
import { ILoginUserDTOS } from "./LoginUserDTOS";
import { UserAlreadyExists } from "../Errors/UserAlreadyExists";
import { prisma } from "../../Prisma/prisma-client";
import bcrypt from "bcrypt"
import { EmailOrPasswordInvalids } from "../Errors/LoginWrong";
import  jwt  from "jsonwebtoken";

export class LoginUserService {
  
  async login( { email, password, id }: ILoginUserDTOS ) {

    const user = await prisma.user.findMany({
      where: {
        email,
      }
    })

    if (user.length < 0 ) {
      
      throw new UserAlreadyExists("Email or password are invalids")
    }

    const registeredPassword = await prisma.user.findUnique({
      where: {
        id,
      },      
      })
    
    if (registeredPassword) {
        
      const verifyPassword = bcrypt.compare(password, registeredPassword.password)

      if (!verifyPassword) {
         
        throw new EmailOrPasswordInvalids("Email or password invalid")
      }

      const token = jwt.sign( {id:  } )

    }

  

  
  }
}