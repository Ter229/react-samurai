import React from "react"
import { Field, reduxForm } from "redux-form"
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from "react-router-dom";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validartors/validators";



const Dialogs = (props) =>{
    
    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map(d => <DialogItem name = {d.name} key ={d.id} id = {d.id}/> ) 
    let messagesElements = state.messages.map(m => <Message message ={m.message} key ={m.id}/> )
    let newMessageBody = state.newMessageBody

    
    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    
    
    if(!props.isAuth) return  <Navigate to="/login" />; 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}                      
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>    
            </div>
            <AddMessageFormRedux onSubmit={AddNewMessage}/>
        </div>

    )
}




const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength50]} name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux= reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs