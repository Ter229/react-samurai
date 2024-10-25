import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music'
import { Route, Routes } from 'react-router-dom';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import React, { Component } from 'react';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Suspense } from 'react';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))





class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }


    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}




const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, { initializeApp })(App)
