// here we will set up routes using express
import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js";

// setting up router
const router=express.Router();

// This will get accessed through this url
// http://localhost:5000/posts 

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
export default router;