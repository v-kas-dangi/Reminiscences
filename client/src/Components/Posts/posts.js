import React from 'react';
// to fetch the data from the global redux store

import { Grid, CircularProgress } from '@material-ui/core'
// to create a grid using the material ui

import { useSelector } from 'react-redux';

import Post from './Post/post';
import useStyles from './styles';

const Posts=(setCurrentId) => {
    // A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
    // When we get access to the state we can simply return all the posts in it..state.posts comes from reducer
    const posts=useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (        // posts.length is used to show the post when it is greater than 0
            <Grid classname={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>          // xs is used to denote the size of post on mobile and sm on large devices.    
                        <Post post={post} setCurrentId ={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;