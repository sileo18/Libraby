export class BookAlreadyExists extends Error {
  
  constructor (message: string) {
    
    super(message)

    this.name = "BookAlreadyExists"
  }
}