import mongoose from "mongoose";
import bcrypt from "bcrypt"


let userSchema = mongoose.Schema({

    login:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"User",
        required:true
    },

    favorites:[{
        booksId:String
    }],

    currentReading:[{
        
        booksId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Book"
        },
        page:Number,
        bookmark:String,
    }],

    read:[{
        
        booksId:String,
        page:Number,
        bookmark:String,
    }],

    toRead:[{
        
        booksId:String,
        page:Number,
    }],
},
{timestamps:true,

})


userSchema.pre("save", function (next) {

    if(!this.isModified("password")){
        
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10)
    next()
})


let User = mongoose.model("User", userSchema);






export default User;