import { NavLink } from 'react-router-dom'
import s from'./Header.module.css'


const Header = (props) => {
    return <header className={s.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s' />

    <div className={s.loginBlock}>
      {props.isAuth 
        ?<div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>  
        : <NavLink to={"/login"}>Login</NavLink>}
      
    </div>
  </header>
}

export default Header