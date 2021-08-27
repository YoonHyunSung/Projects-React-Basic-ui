import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import {CourseRegister,
        Login,
        OnlineProfile,
        Join,
        Home,
        Navi,
        NavigationForJavaScript,
        SchoolStatus,
        Header} from 'components/index'

import styled from 'styled-components';
import Basic from './modern-javascript/chap-01-basic/Basic';
import ArrowFunction from './modern-javascript/chap-02-arrow-function/ArrowFunction';
import Arguments from './modern-javascript/chap-03-arguments/Arguments';
import HomePage from './page/homePage';
import CofinChart from './cofin/cofinChart';
//import './App.css';

const App = () =>(
    <>
    <Layout>
      <Header/>
      <Navi/>
      <NavigationForJavaScript/>
    </Layout>
    <Switch>
    <Route exact path='/' component= { HomePage }/>
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
    <Route exact path='/cofinchart' component={CofinChart}/>
    


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

