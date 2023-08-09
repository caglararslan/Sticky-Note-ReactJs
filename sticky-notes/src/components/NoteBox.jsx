import {React, useEffect, useState, useContext} from 'react'
import ThemeContext from './context/ThemeContext';

function NoteBox({noteStatus,boxPosition,setNotes,notes,setNoteStatus,setcopyStatus}) {
    const onFormSubmit = (e) => {
        e.preventDefault();
        setNotes([e.target[0].value,...notes]);
        setNoteStatus('false');
        setcopyStatus('false');
        console.log(e.target[0].value);
    }
    return (
        <div className={`form-wrapper ${noteStatus}`}>
            {noteStatus==="true" && <form style={{position: 'fixed', top: boxPosition.y, left: boxPosition.x +20}} onSubmit={onFormSubmit}>
                    <input className="note-box" type="text" id="notebox" name="notebox" placeholder="Notunuzu Giriniz..."></input>
                    <button>Ekle</button>
                </form>}
        </div>
    )
}

export default NoteBox
