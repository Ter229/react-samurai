import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Field, reduxForm } from "redux-form"
import { required } from '../../../utils/validartors/validators'
import { maxLengthCreator } from '../../../utils/validartors/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'


const maxLength10 = maxLengthCreator(10)


const MyPosts = (props) => {
  
  let postsElements = props.posts.map(p => <Post  message = {p.message} count = {p.likesCount}/>)

  

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
 
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit = {onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}



const AddNewPostsForm = (props) =>{
  return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText" validate = {[required,maxLength10 ]} placeholder = {"Post message"} />
        </div>
        <div>
            <button>Add posts</button>
       </div>
    </form>
  )
}


const AddPostFormRedux = reduxForm({
    form: "ProfileAddNewPostsForm"
})(AddNewPostsForm)

export default MyPosts