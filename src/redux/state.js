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
            ]
        }
    },
    getState(){
        return this._state
    },
    callSubscriber() {
        console.log("state changes")
    },
    addPost() {
        let i = this._state.profilePage.posts.length + 1
        let newPost = {
            id: i,
            message: this._state.profilePage.newPostText
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.callSubscriber(this._state);
        i++
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer //Паттерн
    }
}

window.store = store

export default store