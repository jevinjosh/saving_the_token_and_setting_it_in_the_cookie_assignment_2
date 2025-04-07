require('dotenv').config();
const jwt=require('jsonwebtoken');
const secret =process.env.SECRET;
const encrypt = (payload, secret) => {
  // your code here and return token
  const token =jwt.sign(payload,secret,{
    expiresIn:'1h',
    algorithm:'HS256',
  });
  console.log(token);
  return token;
};

module.exports = encrypt;
