import { Router } from "express";
import { CreateUserController } from "../UseCase/CreateUserUseCase/CreateUserController";
import { CreateBookController } from "../UseCase/CreateBookUseCase/CreateBookController";
import { DeleteUserController } from "../UseCase/DeleteUserUseCase/DeleteUserController";
import { UpdateQuantityBookController } from "../UseCase/UpdateQuantityBookUseCase/UpdateQuantityBookController";
import { LoginUserController } from "../UseCase/LoginUserUseCase/LoginUserController";
import { GetProfileController } from "../UseCase/GetProfilseUseCase/GetProfileController";
import { CreateRentController } from "../UseCase/CreateRentUseCase/CreateRentController";

const routes = Router()

const createUserController = new CreateUserController()

routes.post('/register', createUserController.handle )


const deleteUserController = new DeleteUserController()

routes.delete('/user/:id', deleteUserController.handle)

const loginUserController = new LoginUserController()

routes.post('/login', loginUserController.handle)

const getProfileController = new GetProfileController()

routes.get('/profile', getProfileController.handle)


const createBookController = new CreateBookController()

routes.post('/books/add', createBookController.handle)

const updateQuantityBookController = new UpdateQuantityBookController()

routes.put('/books/quantity/:id', updateQuantityBookController.handle)

const createRentController = new CreateRentController() 

routes.post('/books/:bookId', createRentController.handle)


export { routes }