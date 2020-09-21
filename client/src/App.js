import React from 'react';
import './App.css';
import { Route  } from 'react-router-dom';
import HeaderComponent from './components/common/AppBar';
import Information from './components/information';
import Lesson from './components/lesson/Lesson';
import ProtectedRoute from './components/shared/ProtectedRoute';

const App = (props) => {

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
