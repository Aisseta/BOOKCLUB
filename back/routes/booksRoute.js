import express from "express"
import { AddBooks, OneBook } from "../controllers/bookControllers.js";
import { DeleteBook } from "../controllers/bookControllers.js";
import { EditBookSubmit } from "../controllers/bookControllers.js"; 
import { AllBooks } from "../controllers/bookControllers.js";


const router = express.Router();

// ajoutez un livre (page admin)
router.post("/add-book", AddBooks)

// editez un livre (page admin)
router.put("/edit-book/:id", EditBookSubmit)

//afficher les livres

router.get("/books", AllBooks)

router.get("/book/:id", OneBook)

//supprimer un livre (page admin)

router.delete("/delete-book/:id", DeleteBook)




export default router
