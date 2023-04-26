import { useState } from 'react';

import { App } from './App';
// https://react.dev/reference/react/useState#usestate

export const Pokemon = ({ name, id, caught}) => {
    
   
   function handleClick() { 
       if (!caught) {
        return caught
    }   
}
    
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id +'.png'
    const style = {
        backgroundColor: caught ? "red" : "green"
    };
    return (
         
        <div className="color-wrap" style={style}>
            <h2 className='name'>{name}</h2>
            <img className='img' src={url} /> 
            <button className='button' onClick= { handleClick } > {caught ? 'отпустить' : 'поймать'}</button>
        </div>
    );
}
