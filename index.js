const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "!@#$%^&*_-+?/|<>";

function generatePassword(length) {
  const combinedChars = upperCase + lowerCase + nums + symbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * combinedChars.length);
    password += combinedChars[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const randomPassword = generatePassword(passwordLength);
console.log(`Generated Password: ${randomPassword}`);
