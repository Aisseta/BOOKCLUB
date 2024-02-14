import mongoose from "mongoose"
import User from "../models/Usermodels.js"



export const Register = async (req, res) => {


    let mailVerified = await User.findOne({"email": req.body.email})

    if (mailVerified){
        return res.json({ message:" Cet email est déjà enregistré"})
    }

    let user = {
        
        login:req.body.login,
        email:req.body.email,
        password:req.body.password

    }

    let newUser = new User(user)

    await newUser.save()

    res.json({message: "utilisateur bien enregistré"})
}


export const LogIn = async (req,res) => {

    let login = {
        email: req.body.email,
        password: req.body.pwd
    }
    console.log(login);

    let user = await User.findOne({"email": req.body.email})
    console.log(user);

    if(user){
        if(user.password === req.body.pwd){
            req.session.isAdmin = true
           res.json({message:"Mot de passe correcte, tu es bien connecté", isAdmin: req.session.isAdmin})
        }else{
            console.log("Mot de passe incorrecte, il faut revoir ta saisie!");
          
            res.redirect("/login")
        }

    }else{
        console.log("Email introuvable");
        res.redirect("/login")
    }

}

