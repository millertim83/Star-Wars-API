import React from 'react';


function CharacterTable(props) {
    //console.log(props.characters);

    const tableRow = props.characters.map(character => {
        return (
            <tr> 
                <td>{character.name}</td>
                <td>{character.birthDate}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.homeworld}</td>
                <td>{character.species}</td>
                
            
            </tr>
        )
    });
        
    

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
                {<tbody>{tableRow}</tbody>}
            </table>
        </div>

    )
}

export default CharacterTable;