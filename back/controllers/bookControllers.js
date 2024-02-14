import mongoose from "mongoose";
import Books from "../models/BooksModel.js";

export const AddBooks = async (req,res) => {

    const book = {
        title:req.body.title,
        author:req.body.author,
        category:req.body.category,
        description:req.body.description,
        publisDate:req.body.date,
        pages:req.body.pages
        // on ne gère pas les images pour le moment
    }

    const newBook = new Books(book)

    await newBook.save()

    res.json({message:"ce nouveau livre a bien été ajouté"})
}


export const EditBookSubmit = async (req,res) => {

    const book = {
        title:req.body.title,
        author:req.body.author,
        category:req.body.category,
        description:req.body.description,
        publisDate:req.body.date,
        pages:req.body.pages
    }
    
    const id = req.params.id
    
    await Books.updateOne({"_id": id }, book)
    
    res.json({message:"ce livre à été correctement modifié"})
}



export const AllBooks = async (req,res) =>{

    const books = await Books.find()

    res.json({message:"les livres sont correctement affiché"})

}


export const OneBook = async (req,res) =>{

    const id = req.params.id

    let onebook =  await Books.findById(id)

    res.json({message:"le livre est correctement affiché"})
}



export const DeleteBook = async (req,res) =>{


    const id = req.params.id 

    await Article.deleteOne({"_id": id})

    res.json({message:"ce livre à été correctement supprimé"})

}

