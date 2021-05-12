import React from 'react';
import './App.css';
import {Home} from './pages/homepage/homepage';
import {Shop} from './pages/shoppage/shop';
import {Signin} from './pages/sign-in/sign-in';
import {Header} from './components/header/header';
import{Switch,Route,Redirect} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action'




class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Signin/>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
