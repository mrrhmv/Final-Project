export const initialState = {
    posts: []
};

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_POST_SUCCESS':
            return{
                ...state, posts: action.payload
            };

        default:
            return state
    }

}