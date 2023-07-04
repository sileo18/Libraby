import { Rent } from "@prisma/client";
import { ICreateRentDTOS } from "./CreateRentDTOS";
import { prisma } from "../../Prisma/prisma-client";

export class CreateRentService {
  async create( {userId, bookId, endsAt }: ICreateRentDTOS ){     
    
      
      const createRent = await prisma.rent.create({
        data: {
          userId,
          bookId,
          endsAt
        }
      })

       return createRent

      
    
  }
}