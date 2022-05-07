import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user.js'
import tourRouter from './routes/tour.js'

const port = 5000;

// mongo_url : mongodb+srv://kalyani:<password>@cluster0.fsgry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express();

app.use(morgan("dev"));
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({limit:'30mb',extended:true}));
app.use(cors());


app.use('/users' , userRouter);
app.use('/tour' , tourRouter);


const mongoDbUrl = "mongodb+srv://kalyanisahu:kalyanisahu123@cluster0.capfc.mongodb.net/tourappDb?retryWrites=true&w=majority"

mongoose.connect(mongoDbUrl).then((res)=>{
    app.listen(port , ()=>
        console.log(`server running on ${port}`)
    )
}).catch((err)=>
    console.log(err));