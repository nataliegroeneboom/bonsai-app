import React from 'react';
import Image from '../Image/Image';
import classes from './Tree.module.css';





const tree = (props) => {
    return (
        
       <div className={classes.Tree}>
            <Image photo={props.image} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className={classes.Prune}>
                    <h5>Pruning</h5>
                    <p>{props.pruning}</p>
                </div>
                
            </div>
    </div>
    )
}

export default tree;