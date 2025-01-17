import { errorHandler } from "./middlewares/errorHandler.js";
import restaurantsRouter from "./routes/restaurants.js";
import cusinesRouter from "./routes/cuisines.js";
import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/restaurants", restaurantsRouter);
app.use("/cuisines", cusinesRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Aplication running on port ${PORT}`);
}).on("error", (error) => {
    throw new Error(error.message);
});