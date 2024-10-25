import s from './Post.module.css'


const Post = (props) => {
  return (  
        <div className={s.item}>
          <img src='https://i.pinimg.com/236x/8c/27/bb/8c27bb7cdc0577caf1f09df5dac9b940.jpg'/>
          {props.message}
          <div>
            <span>like:{props.count}</span>
          </div>
        </div>
  )
}

export default Post