import { useState } from 'react';
// https://react.dev/reference/react/useState#usestate

export const Pokemon = ({ name, id}) => {

    const [caught, setCaught] = useState(false);

    function handleClick() { 
        setCaught(!caught)
    }
    
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id +'.png'
    const style = {
        backgroundColor: caught ? "red" : "green"
    };
    return (
        <div style={style}>
            <h2>{name}</h2>
            <img src={url} /> 
            <button onClick = {handleClick} > {caught ? 'отпустить' : 'поймать'}</button>
        </div>
    );
}
