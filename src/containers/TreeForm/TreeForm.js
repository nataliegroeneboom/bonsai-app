import React, {Component} from 'react';
import axios from '../../axios-content';
import Input from '../../components/UI/Input/Input';

class TreeForm extends Component {
    state = {
        input: '',
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
        event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state.trees){
            formData[formElementIdentifier] = this.state.trees[formElementIdentifier].value;
        }
     axios.post('/trees.json', formData)
        .then(response => {
            
        })
        .catch(error => {
            
        })
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
            <form>
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
        )
    }
}

export default TreeForm;