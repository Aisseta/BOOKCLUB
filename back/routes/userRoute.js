import express from "express"
import { Register, LogIn } from "../controllers/userControllers.js";


const router = express()

router.get("/users", )

router.get("/user/:id")
//se connecter en tant qu'utilisateur 
router.post("/login", LogIn)

// s'enregistrer
router.post("/register", Register)

// se deconnecter 
router.get("/logout", )



router.post("/edit-user/:id", )

router.get("/delete-user/:id")

router.get("/logout", )


export default router



