import 'dotenv/config';
import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";

import routes from "./routers/routes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", routes)

/* LEVANTAR EL SERVIDOR */
app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto: ", PORT);
});