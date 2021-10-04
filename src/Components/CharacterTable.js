import React from 'react';


function CharacterTable(props) {
    console.log(props.characters);

    const character = props.characters.map(character => {
        <tr>
            <td>{character.name}</td>
            <td>{character.birthdate}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
        </tr>
        
    })
        
    

    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Homeworld</th>
                        <th>Species</th>
                    </tr>
                </thead>
                {<tbody>{character}</tbody>}
            </table>
        </div>

    )
}

export default CharacterTable;