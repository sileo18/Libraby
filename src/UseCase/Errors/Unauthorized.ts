export class Unauthorized extends Error {

  constructor(message: string, status: number) {
    super(message)

    this.name = "Unauthorized Request"
  }

}