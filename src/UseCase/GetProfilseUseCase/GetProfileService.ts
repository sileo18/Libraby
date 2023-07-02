import { UserAlreadyExists } from "../Errors/UserAlreadyExists"
import { IGetProfileDTOS } from "./GetProfileDTOS"

export class GetProfileService {
  async getProfile( { authorization }: IGetProfileDTOS ) {    

      if (!authorization) {

        throw new UserAlreadyExists('Não Autorizado')

      }   
    
  } 
}