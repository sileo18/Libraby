export class EmailOrPasswordInvalids extends Error {

  constructor(message: string) {

    super(message)
    this.name = "EmailOrPasswordInvalids"
  }
}