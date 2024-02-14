import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoute.js";
import { connectDB } from "./config/database.js";
import bookRouter from "./routes/booksRoute.js";
import userBook from "./routes/userBook.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cors())

const PORT = 5500

connectDB

app.use("/", userRouter)
app.use("/", bookRouter)
app.use("/", userBook)












app.listen(PORT, () =>{
    console.log("Le serveur est exécuté sur http://localhost:" + PORT);
})