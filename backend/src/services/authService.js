const { User } = require('../models/userModel');
const { RegistrationConflictError, NotAuthorizedError } = require('../helpers/errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (email, password, nickname, avatarURL) => {
    const user = await User.findOne({ email });
    
    if (user) {
        throw new RegistrationConflictError("Email in use");
    };

    const newUser = await User.create({
        email,
        password,
        nickname,
        avatarURL,
    });
    
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

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    await User.findByIdAndUpdate(user._id, { token });
    user.token = token;
     
    return user;
};

const logout = async (_id ) => {
    await User.findByIdAndUpdate(_id, { token: null });
};

const updateAvatar = async (_id, avatarURL) => {
    const user = await User.findByIdAndUpdate(_id, { avatarURL });
    user.avatarURL = avatarURL;

    return user;
};

module.exports = {
    signup,
    login,
    logout,
    updateAvatar,
};