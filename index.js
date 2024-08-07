import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRoutes from './routers/userRoutes.js';
import genreRoutes from './routers/genreRoutes.js';
import movieRoutes from './routers/movieRoutes.js';
import reviewRoutes from './routers/reviewRoutes.js'

const app = express();

app.use(express.json()); // Use this for JSON payloads
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => console.log(error));

// Use the routes with `/api` prefix
app.use('/api', userRoutes);
app.use('/api', genreRoutes);
app.use('/api', movieRoutes);
app.use('/api', reviewRoutes);
