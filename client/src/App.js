import React, {useEffect, useState} from 'react';

import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
// used to dispatch an action
import {useDispatch} from 'react-redux';
import memories from './images/abcd.png';
import {getPosts} from './actions/posts'
import Posts from './Components/Posts/posts';
import Form from './Components/Form/form';
import useStyles from './styles';

const App= () => {
    const [currentId, setCurrentId] =useState(null);    //creating a id so that it can be passed for editing the post in the backend. At the start taking it as null. 
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="primary">
                <Typography className={classes.heading} variant="h2" align="center">Reminiscences</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;