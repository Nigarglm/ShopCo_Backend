import User from '../models/auth.model.js'

export const createUser = async(req,res) =>{
    try {
        const { photo, name, surname, userName, email, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ userName }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({ photo, name, surname, userName, email, password });
        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}


export const getUsers = async(req,res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
}


export const getSingleUser = async(req,res) =>{
    try {
        const userId = req.params.id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
}


export const editUser = async(req,res) =>{
    try {
        const userId = req.params.id;
        const updates = req.body;

        const user = await User.findByIdAndUpdate(userId, updates, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
}


export const deleteUser = async(req,res) =>{
    try {
        const userId = req.params.id;

        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
}
