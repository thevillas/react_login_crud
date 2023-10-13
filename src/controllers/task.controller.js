import task from '../models/task.model.js';

export const getTasks = async(req, res) =>{

    const task = await task.find();
    res.json(task);
}

export const getTask = async(req, res) =>{

    const task = await task.findById(req.params.id);
    if(!task) return res.status(404).json({message: 'Task not found'});
    res.status(200).json(task);
}

export const createTask = async(req, res) =>{
    const { title, description, date} = req.body;

    const newtask = new task ({
        title,
        description,
        date
    });
    const savedTask = await newtask.save();
    res.status(201).json(savedTask);
}

export const updateTask = async(req, res) =>{
    const task = await task.findByIdAndUpdate(req.params.id, req.body);
    if(!task) return res.status(404).json({message: 'Task not found'});
    res.status(201).json(task);
}

export const deleteTask = async(req, res) =>{
    const task = await task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({message: 'Task not found'});
    return res.status(204);
}
