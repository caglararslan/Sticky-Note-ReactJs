import {React, useState, useContext} from 'react'
import ThemeContext from './context/ThemeContext'

function ImageSelector() {
    const data = useContext(ThemeContext);
    //console.log(data);
    return (
        <div className="select-screen">
            <h3>Please Select Your Image</h3 >
            <input type="file" onChange={(e) => data.setBackground(URL.createObjectURL(e.target.files[0]))}/>
        </div>
    )
}

export default ImageSelector
