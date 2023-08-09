import React from 'react'

function Note({note,boxPosition}) {
    return (
        <div className="note" style={{position:'absolute', left:boxPosition.x, top:boxPosition.y, '--color': note.color}}>
            <ul>
                <li>{note}</li>
            </ul>
        </div>
    )
}

export default Note
