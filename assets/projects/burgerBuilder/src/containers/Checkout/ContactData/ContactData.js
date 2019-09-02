import React from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
    
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: '',
                touched: false,
                validation: {
                    required: true,
                    valid: false
                }
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                touched: false,
                validation: {
                    required: true,
                    valid: false
                }
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                touched: false,
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    valid: false
                }
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                touched: false,
                validation: {
                    minLength: 3,
                    required: true,
                    valid: false
                }
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                touched: false,
                validation: {
                    required: true,
                    valid: false
                }
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                validation: {
                    required: true,
                    valid: true
                },
                value: 'fastest',
                touched: false,
            }
            },
        loading: false,
        formIsValid: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }

        const order = {
            orderTime: new Date(),
            ingredients: this.props.ings,
            price: this.props.prc,
            kcal: this.props.kcal,
            orderData: formData
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false, purchasing: false})
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({loading: false, purchasing: false})

        } );
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required && isValid) {
            isValid = value.trim() !== '';
        }

        if (rules.minLength && isValid) {
            isValid = value.length >= rules.minLength 
        }

        if (rules.maxLength && isValid) {
            isValid = value.length <= rules.maxLength
        }

        return isValid;
    }

    inputChanged = (event, inputIdentifier) => {
        console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.validation.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;

        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].validation.valid && formIsValid;
        }
        
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    }
    
    render() {

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (<form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement => (
                    <Input
                    key={formElement.id}
                    invalid={!formElement.config.validation.valid}
                    shouldValidate={formElement.config.validation.required}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChanged(event, formElement.id)}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}/>
                    ))}
                    <Button  btnType='Success' disabled={!this.state.formIsValid}>ORDER</Button>
                </form>)
        if (this.state.loading) {
            form = <Spinner/>
        } 
        
        return(
        
            
            <div className={classes.ContactData}>
                <h4>Enter your contact data:</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        prc: state.totalPrice,
        kcal: state.totalKcal,
    }
}


export default connect(mapStateToProps)(ContactData);