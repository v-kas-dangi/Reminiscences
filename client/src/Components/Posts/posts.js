import React from 'react';
// to fetch the data from the global redux store
import { useSelector } from 'react-redux';

import Post from './Post/post';
import useStyles from './styles';

const Posts=() => {
    // A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
    // When we get access to the state we can simply return all the posts in it..state.posts comes from reducer
    const posts=useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    return(
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;