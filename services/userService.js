// services/userService.js
import User from '../models/userModel.js';

export const createUser = async (userData) => {
    try {
        const user = new User(userData);
        return await user.save();
    } catch (error) {
        throw new Error(error);
    }
};

export const updateUser = async (id, updateData) => {
    try {
        const user = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!user) throw new Error('User not found');
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteUser = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) throw new Error('User not found');
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

export const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) throw new Error('User not found');
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

export const getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error(error);
    }
};
