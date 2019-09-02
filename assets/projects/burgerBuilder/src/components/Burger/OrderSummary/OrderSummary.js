import React, {Component} from 'react';

import Auxilliary from '../../../hoc/Auxilliary/Auxilliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component  {
    
    render() {
        
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map( igKey => {
            return (
                <li key={igKey + this.props.ingredients[igKey]}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}
                </li>)
    })
        
        
        
        return (
        <Auxilliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h4>Total price: <strong>${this.props.price.toFixed(2)}</strong></h4>
            <p>Continue to Checkout</p>
            <Button
                children='CANCEL'
                btnType="Danger"
                clicked={this.props.purchaseCancelled}/>
            <Button
                children='CONTINUE'
                btnType="Success"
                clicked={this.props.purchaseContinued}/>
        </Auxilliary>
    )
    }
    
    
};

export default OrderSummary;