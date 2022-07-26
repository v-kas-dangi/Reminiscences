// here we will set up routes using express
import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

// setting up router
const router=express.Router();

// This will get accessed through this url
// http://localhost:5000/posts 

router.get('/', getPosts);
router.post('/', createPost);
export default router;