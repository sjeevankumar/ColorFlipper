const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
