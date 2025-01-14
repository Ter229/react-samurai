import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css' 
import React from "react";



class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode () {
        this.setState( {
            editMode: true
        } )
    }

    deactivateEditMode () {
        this.setState( {
            editMode: false
        } )
        this.props.updateStatus(this.state.status)
    }
    OnStatusChange(e){
           this.setState({
                status: e.currentTarget.value
           }) 

    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return( 
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.OnStatusChange.bind(this)} autoFocus={true} onBlur={ this.deactivateEditMode.bind(this)} value={this.state.status}/>
                    </div>
                }
            </div>
          )
        }
    }
  



export default ProfileStatus