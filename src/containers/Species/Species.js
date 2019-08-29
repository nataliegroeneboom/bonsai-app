import React, {Component} from 'react';
import Tree from '../../components/Tree/Tree';
import Modal from '../../components/UI/Modal/Modal';
import TreeForm from '../TreeForm/TreeForm';

class Species extends Component {
    state = {
        input: '',
        trees: [
            {id: 1,
            name: 'Japanese Red Maple',
            description: 'This has a brilliant ' 
             + 'scarlet-coloured foliage in spring. ' 
             + 'Position in full light but shield from the hot sun,' 
             +' which causes leaf scorch.  Water daily throughout the growing season; sparingly in winter and feed weekly for a month after the leaf buds open (then fortnightly untill late summer).  Repot every two years',
            pruning: 'Trim new growth to 1-2 leaf pairs in spring.  Totoal leaf cutting in midsummer encourages small leaves.',
            image: {
                src: 'red_japanese',
                alt: 'image of a red japanese bonsai in autumn'
            }
            },
            {
            id: 2,  
            name: 'Honeysuckle',
            description: 'This can live in full sun (partial shade in summer), but protect from frost.  Water daily throughout the growing season, but sparingly in winter (do not let the soil dry out).  Feed every two weeks in summer, repot every two years in basic soil mix',
            pruning: 'Treat Dwarf Honeysuckle in the say way as topiary.  Constant clipping of leaves is vital to encourage dense growth.',
            image: {
                src: 'honeysuckle',
                alt: 'image of a cascading honeysuckle bonsai tree'
            }
            },
            {
            id: 3,  
            name: 'Silver Birch',
            description: 'Position in full sun or partial shade and water daily throughout the growing season; keep moist in winter.  Feed every two weeks from one month after the leaves open until late summer.  Repot every second year until 10 years old.',
            pruning: 'Prune new shoots back to 2-3 leaves in spring and at other growing periods. Remove large leaves throughout the growing season.  Use a wound sealant.',
            image: {
                src: 'red_japanese',
                alt: 'image of a red japanese bonsai in autumn'
            }
            }
        ]
    }

    inputHandler = (childData) => {
        this.setState({input: childData})
    }
    render(){
        return (
            <div>
                <Modal><TreeForm parentCallback = {this.inputHandler}/></Modal>
                <h1>Trees</h1>
                <h2>{this.state.input}</h2>
                {this.state.trees.map(tree=>{
                    return <Tree key={tree.id} name={tree.name} description={tree.description} pruning={tree.pruning} image={tree.image}/>
                })}
            
            </div>
        )
    }
}

export default Species;