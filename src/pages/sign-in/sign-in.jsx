import React from 'react';
import './sign-in.scss';
import SignIn from '../../components/signin/signin';
import Signup from '../../components/signup/signup'



export const Signin = ()=>(
    <div className='sign-in-and-sign-up'>
      <SignIn/>
      <Signup/>
    </div>
)