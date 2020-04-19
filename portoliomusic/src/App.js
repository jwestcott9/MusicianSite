import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageContent from './components/shared/PageContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/shared/Header';
import './stylesheets/main.scss'

function App() {
  return (
   <Router>
     <Route path = "/" component = {Header}/>

     <Route path = "/" component = {PageContent} />
     </Router>
  );
}

export default App;
