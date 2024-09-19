"use client"
import { useEffect, useState } from "react"
import classes from "./quarterback-style.module.css"

function Quarterback() {
    // Array of students state
    const [quarterback, setQuarterback] = useState([])
    // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
    async function getRandomQuarterback() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080/quarterbacks", {
            method: "GET",
        })
        // We turn the result into a JSON. We could have also turned it into a string, for instance
        const resJSON = await res.json()
        if (resJSON.length > 0) {
            const randInd = Math.floor(Math.random() *resJSON.length);

            setQuarterback([resJSON[randInd]]);
        }
    
    }

    // You can use a side effect to the page loading by entering an empty [] dependency array
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