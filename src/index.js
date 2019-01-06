import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/home';
import Donasi from './components/donasi';
import About from './components/about/';
import Article from './components/article';
import Login from './components/login';
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/donasi" component={Donasi}/>
      <Route path="/about" component={About}/>
      <Route path="/article" component={Article}/>
      <Route path="/login" component={Login}/>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
