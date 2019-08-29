import React, {Component} from 'react';

class TreeForm extends Component {
    state = {
        trees: [
            {id: 0,
            name: '',
            description: '',
            pruning: '',
            image: {
                src: '',
                alt: ''
                }
            }
        ]
    }

    changeHandler = event => {
        this.setState({
            
        })
    }
    render(){
        return (
            <form>
                <input type="text" value='' onChange={this.changeHandler} />
            </form>
        )
    }
}

export default TreeForm;