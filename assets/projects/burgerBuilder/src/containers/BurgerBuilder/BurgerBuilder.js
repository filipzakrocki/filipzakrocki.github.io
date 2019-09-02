import React, { Component } from 'react';
import axios from '../../axios-orders';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'


import Auxilliary from '../../hoc/Auxilliary/Auxilliary'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';



class BurgerBuilder extends Component {
    
    state = {
        purchasing: false, // moved to checkout?
        loading: false, // is the request being sent?
    }
    
    componentDidMount = () => {
        // axios.get('https://my-project-1551193995472.firebaseio.com/ingredients.json')
        // .then(response => {
        //     this.setState({ingredients: response.data})
        //     this.updateInitialKcalHandler();
        //     this.updatePurchaseState(this.state.ingredients);
        // })
        // .catch(err => {
        //     this.setState({error: true})
        // })
    }
    
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    

    
    purchaseContinueHandler = () => {        
        this.props.history.push('/checkout')
    }
    
    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    
    

 

    
    
    render() {
        
        const disabledInfo = {
            ...this.props.ings
        };
        
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummary = null;    
        let burger = this.state.error ? <p>Ingredients cannnot be loaded!</p> : <Spinner/>;
        
        if (this.props.ings) {
            burger = (
            <Auxilliary>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    ordered={this.purchaseHandler}
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    price={this.props.prc}
                    totalKcal={this.props.kcal}
                    disabled={disabledInfo}
                    purchasable={this.props.pur}/>
            </Auxilliary>
        );
            
            orderSummary = <OrderSummary
                        price={this.props.prc}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.props.ings}/>
        }
        
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        
        
            
        
        return (
            <Auxilliary>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
                
            </Auxilliary>);
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        prc: state.totalPrice,
        kcal: state.totalKcal,
        pur: state.purchasable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));