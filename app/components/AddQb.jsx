'use client'
import { useState } from "react"
import classes from "./add-qb-styles.module.css";

<new></new>

function AddQb() {
    async function onSubmit(){
        const newQuarterback = {
            fullName,
            receivers
        }
        const res = await fetch ("http://localhost:8080/students", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newQuarterback)
        })
        {window.location.reload()}
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [fullName, setFullName] = useState("")
    const [receivers, setReceivers] = useState([])

    return (
        <div>
            <h3>Add Qb</h3>
            <button onClick={onSubmit}>Submit</button>
            <h4>Main Info</h4>
            <div className = {classes.mainForm}>
                <div>
                    <label htmlFor="Name">Name: </label>
                    <input 
                    name="Name"
                    value={fullName}
                    onChange = {(event) => setFullName(event.target.value)}
                    />
                </div>   
            </div>
            <h4>Receivers</h4>
            {
                receivers.map((receiver, i) => 
                    <div key={i}>
                    <input 
                    value={receiver}
                    placeholder="No One"
                    onChange={(event) => setReceivers(receivers.map((c, j) => {
                        // TERNARY STATEMENT: return two different things based on a conditional
                        return i === j ? event.target.value : c 
                    })
                )}
                    />
                    <br/><br/>
                    </div>
                )
            }
            <button onClick = {() => setReceivers(Array(...receivers, ""))}>
                Add New Receiver
            </button>
        </div>
    )
}
export default AddQb