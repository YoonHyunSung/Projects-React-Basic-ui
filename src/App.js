import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import CourseRegister from './components/CourseRegister'
import Login from './components/Login'
import OnlineProfile from './components/OnlineProfile'
import Join from './components/Join'
import Home from './components/Home'
import Navi from './components/Navi'
import SchoolStatus from './components/SchoolStatus';
import styled from 'styled-components';
import Header from './components/Header';
import Basic from './modern-javascript/chap-01-basic/Basic';
import NavigationForJavaScript from './components/NavigationForJavaScript';
import ArrowFunction from './modern-javascript/chap-02-arrow-function/ArrowFunction';
import Arguments from './modern-javascript/chap-03-arguments/Arguments';
//import './App.css';

const App = () =>(
    <>
    <Layout>
      <Header/>
      <Navi/>
      <NavigationForJavaScript/>
    </Layout>
    <Switch>
    <Route exact path='/' component= { Home }/>
    <Redirect from='/home' to= { '/' }/>
    <Route exact path='/join' component={Join}/>
    <Route exact path='/online-profile' component={OnlineProfile}/>
    <Route exact path='/course-register' component={CourseRegister}/>
    <Route exact path='/login' component ={Login}/>
    <Route exact path='/school-status' component ={SchoolStatus}/>

    <Route exact path='/basic' component={Basic}/>
    <Route exact path='/arrow-function' component={ArrowFunction}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    <Route exact path='/arguments' component={Arguments}/>
    
    </Switch>
    </>
  );
  const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
 `
export default App;

