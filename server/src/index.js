import express from "express";
import mongoose from "mongoose";

import api from"./routes/index";

const app = express();

app.use(express.json());

(async () => {
  app.use("/api", api);

  mongoose.connect("mongodb://localhost/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const port = 5000;
  app.listen(port, () => {
    console.info(`Server is started in ${port}`);
  });
})();
