import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// importing router we exported in posts
import postRoutes from './routes/posts.js';

// initialise the app so then we can use all different methods on that app instance
const app=express();


// setting up the body parser, limit controls the maximum request body size
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
app.use(cors());

// using express middleware to connect it to our application, every route inside of the postRoutes is going to start with posts
app.use('/posts', postRoutes);


// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL='mongodb+srv://viki:123321@cluster0.rujdd.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT||5000;
// connecting url to the database using mongoose last two parameters to just avoid errors
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true })
    // if promised then listen
    .then(()=> app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    // else throw error
    .catch((error)=>console.log(error.message));