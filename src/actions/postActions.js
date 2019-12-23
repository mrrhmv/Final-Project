export function setPost(posts) {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const setPostsAction=(type)=>{
        return async dispatch=>{
          await fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts')
                .then(response => response.json())
                .then(result => {
                    const items = result.filter(obj => obj.type===type);
                    const activeItems = items.filter(item => item.isActive === true);
                    dispatch({type: 'FETCH_POST_SUCCESS', payload: activeItems});
                })
        }
};

