import React from 'react'
import { useEffect, useState } from 'react'

const ResizeAwareComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    //set a window size 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        console.log("Listener added");
        window.addEventListener('resize', handleResize);
        return () => {
            console.log("cleanup Listener added");
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    console.log("rendered");

return (
    <div>
        <h1>Resize Aware Component</h1>
        <p>window width: {windowWidth}px</p>
    </div>
)
}

export default ResizeAwareComponent