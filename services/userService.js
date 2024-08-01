import User from '../models/userModel.js';

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

export default { createUser };
