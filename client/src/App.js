import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HeaderComponent from './components/common/AppBar';
import Information from './components/information';
import Lesson from './components/lesson/Lesson';
import ProtectedRoute from './components/shared/ProtectedRoute';
import auth from './utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_AUTH } from './redux/constants';

const App = (props) => {

  const isAuth = useSelector(state => state.userReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
   let isAuthUser = auth.isAuthenticated();
   console.log(isAuthUser)
   dispatch({type: SET_IS_AUTH, isAuthUser});
  }, [isAuth]);

  return (
   <>
    <HeaderComponent/>
    <Route exact path='/' component={Information}/>
    <ProtectedRoute
      exact
      path='/lesson'
      component={Lesson}
      />
   </>
  )
 }

export default App;
