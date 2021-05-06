import React from 'react';
import './signin.scss';
import {FormInput} from '../form-input/form-input'
import { CustomButton } from '../customButton/customButton';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state ={
            email:'',
            password:''
        }

    }
    handleSubmit = e=>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange = e=>{
        const[name,value] = e.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>Already Have An Account?</h2>
                <span>Login Using Your Account</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                        label='Email'
                        name='email'
                        type='email'
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required/>
                        <FormInput 
                        label='Password'
                        name='password' 
                        type='password' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                         required/>
                        <CustomButton type='submit'>Signin</CustomButton>
                    </form> 
            </div>
        )
    }
}

export default SignIn;