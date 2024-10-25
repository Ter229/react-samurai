import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"




let store = {
    _state : {
        profilePage : {
            posts : [
                {id: 1 , message: "i love pudge" , likesCount: 12},
                {id: 2 , message: "i love too", likesCount: 11},
            ],
            newPostText: "Pudgik-pidgek-padjik"
        },
        dialogsPage : {
            dialogs : [
                {id: 1, name: "Victor Dudka"},
                {id: 2, name: "Artem Laptev"},
                {id: 3, name: "PetyacockJN"},
                {id: 4, name: "Vlad Savelyev"},
            ], 
             messages : [
                {id: 1 , message: "hi"},
                {id: 2 , message: "che kavo"},
                
            ],
            newMessageBody:  ""
        },
        sidebar: {}
        
    
    },
    _callSubscriber() {

    },


    getState () {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)


        this._callSubscriber(this._state)
    }

}





export default store