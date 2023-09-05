const {
  signup,
  login,
  logout,
} = require('../services/authService')

const ctrlSignup = async (req, res) => { 
  const { email, password, nickname, avatarURL } = req.body;
    
  const user = await signup(email, password, nickname, avatarURL);

  res.status(201).json({ user });
};

const ctrlLogin = async (req, res) => { 
  const { email, password } = req.body;

  const user = await login(email, password);

  res.status(201).json({ user });
};

const ctrlLogout = async (req, res) => { 
  const { _id } = req.user;

  await logout(_id);

  res.status(204).json();
};

const ctrlCurrent = async (req, res) => { 
  const user = req.user;

  res.status(200).json({user});
};

module.exports = {
  ctrlSignup,
  ctrlLogin,
  ctrlLogout,
  ctrlCurrent,
}