const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/generate-password", require("./api/generate-password"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
