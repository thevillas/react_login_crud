import user from '../models/user.models.js'
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';
import { token } from 'morgan';

export const register = async (req, res) => {
    //desestructurar el body que se envia
    const{ email, password, username} = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new user({
            username,
            email,
            password:passwordHash
        });

        const userSave = await newUser.save();
        const Token = await createTokenAccess({ id: userSave._id });
        res.cookie('token', Token);
        return res.status(201).json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email
        });


    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};






export const login = (req, res) => res.send("login");
