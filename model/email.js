import mongoose from "mongoose";

const modelEmail = new mongoose.Schema(
    {
        email:{
            type:String,
            require:true
        },
        picture:String,
        password:String,
    },
    {
        versionKey:false,
        timestamps:true
    }
)

export default mongoose.model("email", modelEmail);