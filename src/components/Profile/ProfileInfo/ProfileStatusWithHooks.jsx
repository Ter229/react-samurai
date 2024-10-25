import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css'
import React, { useEffect } from "react";
import { useState } from "react";




const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () =>{
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }


    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value) 
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode } >{props.status || "-----"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={OnStatusChange} onBlur={ deactivateEditMode } autoFocus={true} value={status}  />
                </div>
            }
        </div>
    )
}




export default ProfileStatusWithHooks 
