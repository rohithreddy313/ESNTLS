import React from 'react';
import {ReactComponent as Logo} from'../../assets/e.svg';
import {Link} from 'react-router-dom';
import './header.scss'


export const Header=()=>(
    <div className='header'>
       <Link to='/' className='logo-container'>   
           <Logo className='logo'/>
       </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
    </div>
    </div>
)

