import  express  from "express";
import cors from "cors"
import bodyParser from "body-parser";
import {routes} from "./Routes/routes";

const app = express()


const corsConfig = {
  origin: true, //Permite acesso de qualquer endereço front end
  optionsSuccesStatus: 200, //Status quando requisição for bem suscedidda
}



app.listen(3333, () => {
  console.log('Server Rodando em http://localhost:3333 🚀')
})

app.use(cors(corsConfig))
app.use(bodyParser.json())
app.use(routes)