const { User } = require('../models/userModel');
const { ConflictError, NotAuthorizedError } = require('../helpers/errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (email, password, nickname, avatarURL) => {
    const user = await User.findOne({ email });
    
    if (user) {
        throw new ConflictError("Email in use");
    };

    await User.create({
        email,
        password,
        nickname,
        avatarURL,
    });

    const newUser = await login(email, password);
    
    return newUser;
};

const login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)) {
        throw new NotAuthorizedError("Email or password is wrong");
    }

    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '6h' });
    const userWithToken = await User.findByIdAndUpdate(user._id, { token }, {new: true});
     
    return userWithToken;
};

const logout = async (_id ) => {
    await User.findByIdAndUpdate(_id, { token: null });
};

const updateAvatar = async (_id, avatarURL) => {
    const user = await User.findByIdAndUpdate(_id, { avatarURL }, {new: true});

    return user;
};

module.exports = {
    signup,
    login,
    logout,
    updateAvatar,
};