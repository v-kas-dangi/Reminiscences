import mongoose from "mongoose";
// Generally mongodb does not have a fix schema to provide flexebility and create completely different types of documents but we are making a schema using mongoose so to give uniformity
const postSchema=mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    // we will convert our image to string using base-64
    selectedFile: String,
    likeCount:{
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default:new Date()
    },
});

const PostMessage=mongoose.model('PostMessage', postSchema);
// we are exporting a mongoose model from the postMessage file
export default PostMessage;