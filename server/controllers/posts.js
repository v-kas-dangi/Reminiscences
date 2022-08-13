// This will contain the logic function of the routes to keep things more organised

// importing PostMessage Model to take in the data and post it
import PostMessage from "../models/postMessage.js";
import express from 'express';


// our find function will take time to process so it needs to await and hence we made it asynchronous
export const getPosts=async (req, res)=>{
    try {
        // use of await to apply async action
        const postMessages= await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }   
}

export const createPost= async(req, res)=>{
    // getting the data to be posted
    const post=req.body;
    // creating a new post
    const newPost=new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}