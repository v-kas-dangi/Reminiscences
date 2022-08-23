// This will contain the logic function of the routes to keep things more organised

// importing PostMessage Model to take in the data and post it
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';


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

export const updatePost= async(req, res)=>{
    const {id : _id} =req.params;
    // post will request the changes from the front end. 
    const post =req.body;

    //checking if the id is valid or not
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id');
    //if valid below statements will execute
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{ ...post, _id }, {new:true});  //asynchronous action demands await. 

    res.json(updatedPost);

}

export const deletePost = async(req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');

    await PostMessage.findByIdAndRemove(id);

    console.log('DELETE!');

    res.json({ message: 'Post has been deleted successfully'});

}

export const likePost = async(req,res) => {
    const{ id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');

    const post = await PostMessage.findById(id);    // Here we can find post with the help of id
    const updatedPost = await PostMessage.findByIdAndUpdate( id, { likecount : post.likecount + 1}, { new : true });  // Here we update the post by increasing likecount by 1

    res.json(updatedPost);
}