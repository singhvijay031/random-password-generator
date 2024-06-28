const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());
app.use(express.json());

const generatePassword = (length, options) => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*_-+?/|<>";
  const spaceChar = " ";

  let characters = "";
  if (options.lowercase) characters += lowercaseChars;
  if (options.uppercase) characters += uppercaseChars;
  if (options.numbers) characters += numberChars;
  if (options.symbols) characters += symbolChars;
  if (options.spaces) characters += spaceChar;

  let password = "";
  while (password.length < length) {
    let char = characters.charAt(Math.floor(Math.random() * characters.length));
    if (options.excludeDuplicate && password.includes(char)) continue;
    password += char;
  }

  return password;
};

app.post("/generate-password", (req, res) => {
  const { length, options } = req.body;
  const password = generatePassword(length, options);
  res.json({ password });
});

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
