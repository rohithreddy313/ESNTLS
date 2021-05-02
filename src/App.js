import React from 'react';
import './App.css';
import {Home} from './pages/homepage/homepage';
import {Shop} from './pages/shoppage/shop';
import {Header} from './components/header/header'
import{Switch,Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={Shop}/>
      </Switch>    
    </div>
  );
}

export default withRouter(App);
