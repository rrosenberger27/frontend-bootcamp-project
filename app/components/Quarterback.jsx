"use client"
import { useEffect, useState } from "react"
import classes from "./quarterback-style.module.css"

function Quarterback() {
    const [quarterback, setQuarterback] = useState([])
    
    async function getRandomQuarterback() {
         
        const res = await fetch("http://localhost:8080/quarterbacks", {
            method: "GET",
        })
        
        const resJSON = await res.json()
        if (resJSON.length > 0) {
            const randInd = Math.floor(Math.random() *resJSON.length);

            setQuarterback([resJSON[randInd]]);
        }
    
    }

    
    useEffect(() => {
        getRandomQuarterback()
    }, [])

    return (
        <div>
            <h2>Quarterback Table</h2>
            <button onClick = {getRandomQuarterback}>
                Get Random Qb!
            </button>
            <br/>
            <br/>
            <table className={classes.table}>
                <tbody >
                <tr className = {classes.row}>
                    <th>name</th>
                    <th>receivers</th>
                </tr>
            {   
                quarterback.map((qb) => 
                    <tr key={qb.id} className={classes.row}>
                        <td style={{fontSize: "30px"}}>{qb.name}</td>
                        <td style={{fontSize: "30px"}}>{qb.receivers.join(", ")}</td>
                    </tr>
                )
            }
                </tbody>
            </table>
        </div>
    )
}
export default Quarterback;