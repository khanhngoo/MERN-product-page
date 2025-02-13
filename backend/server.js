// const express = require('express');
import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); //middleware to parse json data

app.use("/api/products", productRoutes)

app.listen(5000, () => {
    connectDB();
    console.log('Server started on http://localhost:5000');
})
