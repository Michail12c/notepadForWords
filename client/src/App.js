import React, { useEffect } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import HeaderComponent from './components/common/AppBar';
import Information from './components/pages/information';
import ProtectedRoute from './components/shared/ProtectedRoute';
import auth from './utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_AUTH } from './redux/constants';
import { pages } from './constants/pages';
import Footer from './components/common/Footer';

const App = (props) => {

  const isAuth = useSelector(state => state.userReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
   let isAuthUser = auth.isAuthenticated();
   console.log(isAuthUser)
   dispatch({type: SET_IS_AUTH, isAuthUser});
  }, [isAuth]);

  return (
   <div className="app-wrapper">
     <div className="app-content">
      <HeaderComponent/>
      <Route exact path='/' component={Information}/>

      { pages.map(item => <ProtectedRoute
          key={item.path}
          exact={item.exact}
          path={item.path}
          component={item.component}/> ) }
     </div>

    <Footer/>
   </div>
  )
 }

export default App;
