import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect'
import CartItems from '../cart-item/cart-item'
import CustomButton from '../custom-button/custom-button';
import {toggleCartHidden} from '../../redux/cart/cart-actions'

import './cart-dropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      { cartItems.length ? cartItems.map(cartItem => (
        <CartItems key={cartItem.id} item={cartItem} />
      )):
         <span className='empty-message'>Your Cart Is Empty</span>
      }
    </div>
    <CustomButton onClick={()=>{
      history.push('/checkout');
      dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
