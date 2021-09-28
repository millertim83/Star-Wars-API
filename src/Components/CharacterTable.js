import React from 'react';

function CharacterTable() {
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
            </table>
        </div>

    )
}

export default CharacterTable;