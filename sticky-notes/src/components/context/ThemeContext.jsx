import {React, createContext, useState, useEffect} from 'react'
const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [coords, setCoords] = useState({x:0,y:0})
    useEffect(() => {
        const handleWindowMouseMove = event => {
          setCoords({
            x: event.clientX,
            y: event.clientY,
          });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
    
        return () => {
          window.removeEventListener(
            'mousemove',
            handleWindowMouseMove,
          );
        };
      }, []);
    
    const [background, setBackground] = useState("");
    const values = {
        background,
        setBackground,
        coords,
        setCoords
    };
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
