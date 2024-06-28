
module.exports = (req, res) => {
  const { length, options } = req.body;
  const password = generatePassword(length, options);
  res.status(200).json({ password });
};

function generatePassword(length, options) {
  const charset = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };

  let password = "";
  let characters = "";

  if (options.lowercase) characters += charset.lowercase;
  if (options.uppercase) characters += charset.uppercase;
  if (options.numbers) characters += charset.numbers;
  if (options.symbols) characters += charset.symbols;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  if (options.excludeDuplicate) {
    password = Array.from(new Set(password.split(""))).join("");
  }

  if (options.spaces) {
    password = password.replace(/(.{4})/g, "$1 ");
  }

  return password.trim();
}
