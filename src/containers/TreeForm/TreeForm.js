import React, {Component} from 'react';

class TreeForm extends Component {
    state = {
        input: '',
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
            input: event.target.value
        })
    }
    sendData = (event) => {
        event.preventDefault();
        this.props.parentCallback(this.state.input);
        this.setState({
            input: ''
        });
    }

    render(){
        return (
            <form>
                <input type="text" value={this.state.input} onChange={this.changeHandler} />
                <button onClick={this.sendData}>Submit</button>
            </form>
        )
    }
}

export default TreeForm;