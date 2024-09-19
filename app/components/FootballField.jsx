"use client"
import { useEffect, useState } from "react"


const FootballField = () => {
    const [ballPosition, setBallPosition] = useState({ x: 50, y: 50});

    const handleClick = (event) => {
        const fieldRect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - fieldRect.left;
        const y = event.clientY - fieldRect.top;
        
        const newX = Math.min(Math.max(x, 0), fieldRect.width);
        const newY = Math.min(Math.max(y, 0), fieldRect.height)

        setBallPosition({
            x: newX,
            y: newY,   
        });
        if (newX < 30 || newX > fieldRect.width - 30) {
            alert("Touchdown!");
        }
        
    };

    return (
        <div
        onClick = {handleClick}
        style={{
            position: "relative",
            width: "600px",
            height: "400px",
            backgroundColor: "green",
            border: "2px solid white",
            

        }}
        >
        <div 
        style={{
            position: "absolute",
            top: ballPosition.y - 15,
            left: ballPosition.x - 15,
            width: "60px",
            height: "30px",
            backgroundColor: "brown",
            borderRadius: "50%",      
        }}
        />
        </div>
    );
};

export default FootballField;