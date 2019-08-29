import React from 'react';
import classes from './Image.module.css';

const image = (props) => {
    return(
 <img className={classes.Image} src={require('../../images/'+ props.photo.src + '.jpg')} alt={props.photo.alt} />);
}

export default image;