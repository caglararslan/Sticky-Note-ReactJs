import {React, useCallback, useState, useContext} from 'react'
import MyNote from './MyNote'
import Note from './Note'
import StickyNote from './StickyNote'
import ImageSelector from './ImageSelector'
import NoteBox from './NoteBox'
import ThemeContext from './context/ThemeContext'

function Container() {
    const focusOnPage = useCallback((allPage) => {
        if(allPage) {
            allPage.focus();
        }
    },[]);
    const dataImage = useContext(ThemeContext)
    const backgroundStyle = {
        backgroundImage : `url(${dataImage.background})`,
        backgroundPosition: `center center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
    }
    const [boxPosition, setBoxPosition] = useState({
        x:0,
        y:0
    })
    const [noteStatus, setNoteStatus] = useState("false")
    const commentBox = (e) => {
        setBoxPosition({
            x: dataImage.coords.x,
            y: dataImage.coords.y
        })
        //console.log("Tıklandı: "+ noteStatus);
    }
    const [copyStatus, setcopyStatus] = useState('close');
    const keySelector = (e) => {
        if(e.key==='c') {
            setcopyStatus(copyStatus === 'open' ? 'close' : 'open')
            setNoteStatus(noteStatus === 'true' ? 'false' : 'true')
            setBoxPosition({
                x: dataImage.coords.x,
                y: dataImage.coords.y
            })
            console.log("copy request received");
            console.log("Son X pozisyonu: "+boxPosition.x);
            console.log("Son Y pozisyonu: "+boxPosition.y);
        }
    }
    const [notes, setNotes] =useState([]);
    
    return (
        <div tabIndex={0} ref={focusOnPage} onKeyUp={keySelector} style={backgroundStyle} onClick={commentBox} className={`screen ${dataImage.copyStatus}`}>
            <StickyNote/>
            <ImageSelector/>
            <MyNote/>
            <NoteBox noteStatus={noteStatus} boxPosition={boxPosition} notes={notes} setNotes={setNotes} setNoteStatus={setNoteStatus} setcopyStatus={setcopyStatus}/>
            {notes && notes.map(note => <Note key={note} note = {note} boxPosition= {boxPosition}/>)}
        </div>
    )
}

export default Container
