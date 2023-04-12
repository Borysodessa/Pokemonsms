

export const Pokemon = ({ pokemon: { pokemonsName, bulbosaurSrc, CatchingManagement } }) => {
    return (
        <div>
            <h2>{pokemonsName}</h2>
            <img src="./images/Picachu.png" />
            <button>CatchingManagement</button>
        </div>
    );
}