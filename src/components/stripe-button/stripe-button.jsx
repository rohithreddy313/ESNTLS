import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = 100*price
    const publishableKey = 'pk_test_51ItY9CSEZzVxjYGHpbd6PRpBlDku7boczLW1D14SCPm57YYOX46lFL06lrh5BftfQvDNXpsBdE0Pol6k3nPVsZ2V00Ek27QKp7'
    const onToken = token=>{
        console.log(token)
        alert('Your Payment Was Successful')
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='ESNTLS'
        billingAddress
        shippingAddress
        image=''
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton