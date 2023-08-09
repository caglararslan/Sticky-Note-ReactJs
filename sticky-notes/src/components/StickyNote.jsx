import {React, useCallback, useState, useContext} from 'react'
import ThemeContext from './context/ThemeContext';

function StickyNote() {
    const focusOnPage = useCallback((allPage) => {
        if(allPage) {
            allPage.focus();
        }
    },[]);
    const [commentStatus, setCommentStatus] = useState();
    const commentBox = () => {

        //console.log("Tıklandı");
    }
    return (
        <div tabIndex={0}>
            
        </div>
    )
}

export default StickyNote
