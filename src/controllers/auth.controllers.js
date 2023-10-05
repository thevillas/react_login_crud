import user from '../models/user.models.js';

export const register = async (req, res) => {
    //desestructurar el body que se envia
    const{ email, password, username} = req.body;

    try {
        const newUser = new user({
            username,
            email,
            password
        });

        const userSave = await newUser.save();
        return res.status(201).json(userSave);


    } catch (error) {
        res.status(500).json({ menssage: error.menssage});
    }
};






export const login = (req, res) => res.send("login");
