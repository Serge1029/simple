const {Account} = require("../models/accountModel");
const jwt = require('jsonwebtoken');
const jwtKey = require('../jwtKey');

//creating user account
module.exports.register = async (req, res) => {
  const accountDetails = req.body;
  
  Account.create(accountDetails, (err, data) => {
    if(err)
      res.json({error: "An account with this username already exists"});
    else
      res.json({ success: "Account created successfully!", data});
  });
  
};

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  const account = await Account.findOne({username: username});

  if(!account || !account.isValidPassword(password))
    res.json({ error: "account does not exist" });
  else
  {
    const tempInfo = account.toObject();
    delete tempInfo.password;
    const token = jwt.sign(tempInfo, jwtKey);
    res.json({ success: "logged in successfully", token});
  }
};  