import express from "express";
/* import db from "./config/dbConnect.js"; */
import routes from "./routes/index";

/* db.on("error", console.log.bind(console, '*********************Erro de conexão*********************')); // se ocorrer algum erro na conexão (ex senha invalida)
db.once("open", () => {
    console.log("Conexão feita com sucesso");
}); // tenta uma vez a abertura da conexão, com .once("open")
 */

const app = express();
app.use(express.json()); // recurso do express que vai interpretar o que tá chegando nos post e put, e transforma em objeto pra gente conseguir visualizar e inserir
routes(app);

export default app;