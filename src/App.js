import React from "react";
import {BrowserRouter as Router, Route,browserHistory,Switch,Redirect} from 'react-router-dom';
import "./App.js";
import './App.scss';
import HomePage from "./Pages/Home/Index";
import EditableTable from './Try/About/Index';
//import AboutTry from "./Try/About/try/Index";
import DIndex from "./Pages/Home/Dashboard/Index";
//import { Switch } from "antd";


function App(){
  return (
    
    <div className='App'>
      <Router>
      {/* <HomePage/> */}
      {/* <AboutPage /> */}
      
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/page" exact component={DIndex}/>
      <Route path="/about" exact component={EditableTable}/>
      </Switch>
      
      {/* <AboutTry/> */}
    {/* <DashboardPage/> */}
    </Router>
    </div>
    
  )
}

export default App;