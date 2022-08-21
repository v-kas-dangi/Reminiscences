// parameters are state and action, depending on the action type we return either the state or changes based on the current action
// Here our state is current posts.
export default(posts=[], action) => {
    switch (action.type) {
        case 'UPDATE': 
            return posts.map((post) => post._id === action.payload._id ? action.payload : post ) ;           //returning an array of updates.
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
};