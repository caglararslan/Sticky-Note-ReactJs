import {React, useEffect, useState,useContext} from 'react'
import ThemeContext from './context/ThemeContext'

function MyNote() {
    const boxPosition = useContext(ThemeContext);
    return (
        <div className="my-note" style={{position: 'fixed', top: boxPosition.coords.y, left: boxPosition.coords.x +20}}>
            <span>Create Your Note!</span>
        </div>
    )
}

export default MyNote
