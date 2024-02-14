import mongoose from "mongoose"


let articlesSchema = mongoose.Schema({
    
    title: String,
    category: String,
    description: String,
    publishDate: Date,
    image: {
        src:String,
        alt:String,
    },
    rating:[{
        scores:Number,
        
    }],
    like:Number,
    comments:[{
        userId:String,
        content:String,
    }],     
},
{

    timestamps:true,
})



let Articles = mongoose.model("Article", articlesSchema);






export default Articles