import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css' 
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

  if(!props.profile){
    return <Preloader />
  }

  return <div>
    {/* <div>
      <img className={s.content__img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzhHkUIyShEq4T89UUjkBe885h3-OfTjgKg&s' />
    </div> */}
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large}/>
      <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
    </div>
  </div>
}

export default ProfileInfo