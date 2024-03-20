import express from "express";
import sequelize from "./db.js";
import dotenv from "dotenv";
dotenv.config();
// const { express } = pkg;
import { getBookReturDate } from "./controller/booksController.js";
import { getReturnAmount } from "./controller/customerController.js";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sync all defined models to the DB
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// app.get("/status", async (request, response) => {
//   const status = {
//     Status: "Running",
//   };
//   await storeIntialBooksData(request, response);

//   response.send(status);
// });
app.get("/getReturnDate", async (request, response) => {
  const data = await getBookReturDate(request, response);
  response.send(data);
});
app.get("/get_Price", async (request, response) => {
  const data = await getReturnAmount(request, response);
  response.send(data);
});
app.get("");
