import { Router } from "express";
import { CreateUserController } from "../UseCase/CreateUserUseCase/CreateUserController";

const routes = Router()

const createUserController = new CreateUserController()

routes.post('/register', createUserController.handle )

export { routes }