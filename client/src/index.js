import React from 'react';

// import ReactDOM  from 'react-dom';
// changed the import statement to render using createRoot instead of ReactDOM.render which is deprecated.
import ReactDOM  from 'react-dom/client';

// provider is going to keep the track of the store which is that global state and that allow us to access that store from anywhere in the app
import{Provider} from 'react-redux';
import { createStore, applyMiddleware, compose, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from "./App";
import reducers from './reducers'

// const store =createStore(reducers, undefined, compose(applyMiddleware(thunk)))
// Note: used configureStore instead of createStore if you want to use createStore comment out the 4 lines below and use the line above
const composedEnhancers = compose(applyMiddleware(thunk));
const store=configureStore({
    reducer:reducers, 
    enhancers: [composedEnhancers]
})

// New Rendering Method=>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store ={store}>
        {/* commented react strict mode as some features got turned off */}
        {/* <React.StrictMode> */}
            <App />
        {/* </React.StrictMode> */}
    </Provider>, 
);

// Outdated method of rendering=>

// ReactDOM.render(
//     // Now, any React components that call useSelector or useDispatch will be talking to the Redux store we gave to the <Provider>.
//     <Provider store ={store}> 
//         <App />
//     </Provider>, 
//     document.getElementById('root')
// );