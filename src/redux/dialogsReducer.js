const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    users: [
        {id: 1, name: "Nikita Chelyshev"},
        {id: 2, name: "Egor Gerasimov"},
        {id: 3, name: "Nikita Vinnichenko"},
        {id: 4, name: "Khezret Sukhanguliev"},
        {id: 5, name: "Daria Valts"},
        {id: 6, name: "Vladimir Baryshev"},
        {id: 7, name: "Nikita Chelyshev 1"},
        {id: 8, name: "Nikita Chelyshev 2"},
        {id: 9, name: "Nikita Chelyshev 3"},
        {id: 10, name: "Nikita Chelyshev 4"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_MESSAGE:
            let i = state.messages.length + 1
            let newMessage = {
                id: i,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            i++
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        default: return state
    }
}

export const sendMessageActionCreator = () =>{
    return{
        type: ADD_NEW_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) =>{
    return{
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer