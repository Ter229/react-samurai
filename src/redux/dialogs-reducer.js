
const SEND_MESSAGE = "SEND_MESSAGE"




let initialState = {
        dialogs : [
            {id: 1, name: "Victor Dudka"},
            {id: 2, name: "Artem Laptev"},
            {id: 3, name: "PetyacockJN"},
            {id: 4, name: "Vlad Savelyev"},
        ], 
         messages : [
            {id: 1 , message: "hi"},
            {id: 2 , message: "che kavo"},
            
        ]
}



const dialogsReducer = (state = initialState, action) => {

   
    switch(action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody 
            return {
                ...state,
                messages: [...state.messages, {id: 6 , message: body}]
            }
        default :
            return state
    }
}



export const sendMessageCreator = (newMessageBody) =>{
    return {
        type : SEND_MESSAGE, newMessageBody
    }
}






export default dialogsReducer