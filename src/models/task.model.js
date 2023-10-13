import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: 'string',
        require: true
    },
    description:{
        type: 'string',
        require: true
    },
    date: {
        type: date,
        default: date.now
    }
},{
    timestamps: true
})

export default mongoose.model('task', taskSchema);