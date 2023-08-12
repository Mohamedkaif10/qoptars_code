const express = require("express");


const app = express();


const port = process.env.PORT || 8085;

app.use(express.json());

app.use("/api",require("./routes/mailRoutes"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });