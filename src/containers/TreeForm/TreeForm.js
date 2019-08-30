import React, {Component} from 'react';
import axios from '../../axios-content';
import Input from '../../components/UI/Input/Input';
import Aux from '../../hoc/Aux';
import classes from './TreeForm.module.css';

class TreeForm extends Component {
    state = {
        trees: 
            {
            name:{ 
                label: 'Tree:',
                value: '',
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Type of Tree'
                }
            },
            description: {
                label: 'Description:',
                value: '',
                elementType: 'textarea',
                config: {
                    type: 'text',
                    placeholder: 'Tree Description'
                }
            },
            pruning: {
                label: 'Pruning:',
                value: '',
                elementType: 'textarea',
                config: {
                    type: 'text',
                    placeholder: 'Pruning advice'
                }
            }
          
         }
        
    }

    changeHandler = (event, inputIdentifier) => {
        let tree = {...this.state.trees};
        const updatedTreeForm = {...tree[inputIdentifier]};
        updatedTreeForm.value = event.target.value;
        tree[inputIdentifier] = updatedTreeForm;
        this.setState({
            trees: tree
        })
    }
    sendData = (event) => {
        
        const formData = {};
        for(let formElementIdentifier in this.state.trees){
            formData[formElementIdentifier] = this.state.trees[formElementIdentifier].value;
        }
     axios.post('/trees.json', formData)
        .then(response => {
            
        })
        .catch(error => {
            
        });
        event.preventDefault();
        let tree = {...this.state.trees};
        let updatedForm = {};
        for(let inputValue in this.state.trees){
           updatedForm = {...tree[inputValue]};
           updatedForm.value = '';
           tree[inputValue] = updatedForm;
        }
        
        this.setState({
            trees: tree
        });
        this.props.parentCallback();
        
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.trees){
            formElementsArray.push({
                id:key,
                config: this.state.trees[key]
            })
        }
        return (
            <Aux>
            <h2 className={classes.Header}>Add Content</h2>
            <form className={classes.Form}>
                  {formElementsArray.map(formElement => (
                      <Input 
                        key={formElement.id}
                        config={formElement.config.config}
                        elementType={formElement.config.elementType}
                        value={formElement.config.value}
                        change={(event) => {this.changeHandler(event, formElement.id)}}
                        label={formElement.config.label}
                      />
                  ))}        
                <button onClick={this.sendData}>Submit</button>
            </form>
            </Aux>
        )
    }
}

export default TreeForm;