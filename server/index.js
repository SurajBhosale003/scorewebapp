import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected Database');
}).catch((err)=>{
    console.log('Failed to connect' + err.message);
});

const app = express();


app.listen(3000, ()=>{
    console.log('Server listening on port 3000 ');
});
app.use(express.json());
app.use("/api/user",userRouter );
app.use("/api/auth",authRouter );

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
         status : statusCode,
         message : message,
    });
})