import { createContext, useReducer } from "react";
export const Postlist = createContext({
    postlist: [],
    addPost: () => { },
    deletePost: () => { },
    updatePost: () => { },
});

const PostListReducer = (currPostlist, action) => {
    let newPostlist = currPostlist;
    if (action.type === 'DELETE_POST') {
        newPostlist = currPostlist.filter(post => post.id !== action.payload.postId);
    }
    else if (action.type === 'ADD_POST') {
        newPostlist = [action.payload, ...currPostlist];
    } else if (action.type === 'UPDATE_POST') {
        newPostlist = currPostlist.map(post =>
            post.id === action.payload.id ? { ...post, ...action.payload.updatedPost } : post
        );



    }
    return newPostlist;
}

const PostlistProvider = ({ children }) => {
    const [postlist, dispatchPostlist] = useReducer(PostListReducer, DEFAULT_POST_LIST);
    const addPost = (postId, postTitle, postBody, postImageUrl) => {
        dispatchPostlist({
            type: 'ADD_POST',
            payload: {
                id: postId,
                title: postTitle,
                body: postBody,
                imageUrl: postImageUrl,


            },
        });
    };
    const updatePost = (postId, updatedPost) => {
        dispatchPostlist({
            type: 'UPDATE_POST',
            payload: {
                id: postId,
                updatedPost
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostlist({
            type: "DELETE_POST",
            payload: {
                postId
            },
        });
    };
    return (
        <Postlist.Provider value={{
            postlist, addPost, deletePost, updatePost
        }}>{children}
        </Postlist.Provider>
    );
};

const DEFAULT_POST_LIST = [{
    id: "1",
    title: 'Going to mumbai',
    body: 'Hi friends, I am going to mumbai for my vaccations. hope to enjoy a lot. Peace out.:',
    imageUrl: './trip.jpg',
},
{
    id: "2",
    title: 'Going to Delhi',
    body: 'Hi friends, I am going to delhi for my vaccations. hope to enjoy a lot. Peace out.:',
    imageUrl: './download.jpg'

},
{
    id: "3",
    title: 'Going to manali',
    body: 'Hi friends, I am going to manali for my vaccations. hope to enjoy a lot. Peace out.:',
    imageUrl: 'manali.jpg'

},

];
export default PostlistProvider;