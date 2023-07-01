import { Router } from "express";
import { CreateUserController } from "../UseCase/CreateUserUseCase/CreateUserController";
import { CreateBookController } from "../UseCase/CreateBookUseCase/CreateBookController";
import { DeleteUserController } from "../UseCase/DeleteUserUseCase/DeleteUserController";
import { UpdateQuantityBookController } from "../UseCase/UpdateQuantityBookUseCase/UpdateQuantityBookController";

const routes = Router()

const createUserController = new CreateUserController()

routes.post('/register', createUserController.handle )


const deleteUserController = new DeleteUserController()

routes.delete('/user/:id', deleteUserController.handle)


const createBookController = new CreateBookController()

routes.post('/books/add', createBookController.handle)

const updateQuantityBookController = new UpdateQuantityBookController()

routes.put('/books/quantity/:id', updateQuantityBookController.handle)


export { routes }