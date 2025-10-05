import express from "express";
import cors from "cors";

import todoRoutes from "./routes/todoRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/todos", todoRoutes);

// Error handler
app.use(errorHandler);

export default app;