import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Why nobody loves me?"},
                {id: 2, message: "It was a good day."},
                {id: 3, message: "Hi! This is my first post here. ", age: " My age is 18"},

            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log("state changes")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer //Паттерн
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    },
}

window.store = store

export default store