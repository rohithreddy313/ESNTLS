import React from 'react';
import './App.css';
import {Home} from './pages/homepage/homepage';
import {Shop} from './pages/shoppage/shop';
import {Signin} from './pages/sign-in/sign-in';
import {Header} from './components/header/header';
import {auth} from './firebase/firebase';
import{Switch,Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser : null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/signin' component={Signin}/>
        </Switch>    
      </div>
    );
  }
  
}

export default withRouter(App);
