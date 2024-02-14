import express from "express"
import { AddCurrent, GetCurrent } from "../controllers/userBookController.js";




const router = express.Router();

// ajoutez un livre à sa bibliothèque
router.post("/add-current/", AddCurrent)

// editez son avis sur le livre
//router.put("/edit-book/:id", EditBookSubmit)

//afficher les livres

router.get("/current/:id", GetCurrent)

//router.get("/book/:id", OneBook)

//supprimer un livre dans sa bibliothèque

//router.delete("/delete-book/:id", DeleteBook)




export default router