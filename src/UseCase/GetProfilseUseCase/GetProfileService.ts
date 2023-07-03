import { prisma } from "../../Prisma/prisma-client";
import { Unauthorized } from "../Errors/Unauthorized"
import { IGetProfileDTOS } from "./GetProfileDTOS"
import  jwt  from "jsonwebtoken";

type JwtPayLoad = {
  id: string,
  }

export class GetProfileService {
  async getProfile( { authorization }: IGetProfileDTOS ) {         
      
      const token = authorization.split(' ')[1]

      const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayLoad

      const user = await prisma.user.findUnique({
        where: {
          id,
        },     
      })
  
      if (!user) {
        
        throw new Unauthorized("Unauthorized Request", 401)
  
      }

      const {password: _, ...userAuthenticated} = user

      return userAuthenticated
    
  } 
}