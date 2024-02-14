import mongoose from "mongoose"



let booksSchema = mongoose.Schema({
    
    title: String,
    author: String,
    category: String,
    description: String,
    publishDate: Date,
    pages: String,
    image: {
        src:String,
        alt:String,
    },

    rating:[{
        scores:Number,
    }],

    reviews:[{
        userId:String,
        content:String,
    }],     
},
{

    timestamps:true,
})



let Books = mongoose.model("Book", booksSchema);






export default Books