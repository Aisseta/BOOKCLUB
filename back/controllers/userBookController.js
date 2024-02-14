import mongoose from "mongoose";
import Books from "../models/BooksModel.js";
import User from "../models/Usermodels.js";


export const AddCurrent = async (req,res) => {

    const id = req.body.userId
 
    let book = {
     booksId:req.body.id,
     page:req.body.page,
     bookmark:req.body.bookmark
    }
 
    const addCurrentReading = await User.updateOne({_id:id},{$push:{currentReading:book}})
 
    if(!addCurrentReading){
     return res.json({message:"nous n'avons pas pu ajouter ce livre "})
    }
    res.json({message:"ce livre à été correctement ajouté "})
 }
 

export const DeleteBook = async (req,res) =>{


    const id = req.params.id 

    await Article.deleteOne({"_id": id})

    res.json({message:"ce livre à été correctement supprimé"})

}

export const GetCurrent = async (req,res) => {

    const id = req.params.id

    const user = await User.findById(id).populate("currentReading.booksId")
    res.json(user.currentReading)
}






























