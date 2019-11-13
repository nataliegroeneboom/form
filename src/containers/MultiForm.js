import React, {Component} from 'react';
import Input from '../components/Input';

class MultiForm extends Component {
    state = {
       orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            postCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your post code'
                },
                value: ''
            },
            options: {
                elementType: 'select',
                elementConfig: {
                    options: [{  
                        key: 'interest', value: 'Interest in the industry'
                    },
                    {
                        key: 'known', value: 'I know the owner',
                    }]
                },
                value: ''
            }
            
       }
       
    }

    inputChangedHandler = (event, inputIdentifier) => {
       
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        return(
            <div>
                <h2>my form</h2>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                ))}
            </div>
        )
    }

}

export default MultiForm;