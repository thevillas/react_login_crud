import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://villalbas991:megustaprogramar23@cluster0.s5epy4z.mongodb.net/react_crud_proyect");
        console.log(">>DB connect")
    } catch (error) {
        console.log(error)
    }

}