// backend/api/generate-password.js
module.exports = (req, res) => {
  const { length, options } = req.body;
  const password = generatePassword(length, options);
  res.status(200).json({ password });
};

function generatePassword(length, options) {
  // Password generation logic here
  function generatePassword(length, options) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!-$^+";
    const spaceChar = " ";

    let characters = "";
    if (options.lowercase) characters += lowercaseChars;
    if (options.uppercase) characters += uppercaseChars;
    if (options.numbers) characters += numberChars;
    if (options.symbols) characters += symbolChars;
    if (options.spaces) characters += spaceChar;

    if (characters === "") {
      throw new Error("At least one option must be selected.");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  }

  module.exports = (req, res) => {
    try {
      const { length, options } = req.body;
      const password = generatePassword(length, options);
      res.status(200).json({ password });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
