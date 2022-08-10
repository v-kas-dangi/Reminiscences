import * as api from '../api';

// Action Creaters
// These are the functions that return actions
// Actions are the object having type and payloads(data)
// It is asynchronous action
export const getPosts=() => async(dispatch) =>{
    try {
        const{data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error.message);
    }
};