import React from 'react'
import { useState, useEffect } from "react";

export default function Text() {
    const [text, setText] = useState(""); 

    useEffect(() => {
        console.log("Component mounted");

        //used to unmount / stop the logic in the useEffect
        return () => {
            console.log("Component unmounted!!");
        };
    }, []);

    return (
        <div>
            <input  
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />

            <h1> {text} </h1>
        </div>
    );
}
