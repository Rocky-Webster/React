const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: "Why nobody loves me?"},
        {id: 2, message: "It was a good day."},
        {id: 3, message: "Hi! This is my first post here. ", age: " My age is 18"},

    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let i = state.posts.length + 1
            let newPost = {
                id: i,
                message: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = ''
            i++
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default: return state
    }
}

export const addPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer