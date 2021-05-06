import React from 'react';
import './customButton.scss';


export const CustomButton = ({children,...otherProps})=>(
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);