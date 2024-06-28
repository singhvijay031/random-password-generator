const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/api/generate-password", require("./api/generate-password"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
