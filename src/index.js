import express from "express";
import middleware from "./utils/middleware.js";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

middleware(app);

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Otaku API 🚀");
});

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message:
      "Not found! check docs here: https://github.com/FandyAhmadAzizi/otaku-api",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
