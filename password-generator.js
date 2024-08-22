// password-generator
const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 8, 
  numbers: true
});

console.log(password);
