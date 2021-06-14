import { useState } from "react"

function FundsForm({addFunds}) {
    const [newMoney, setNewMoney] = useState('')

    //console.log(newMoney)

    function handleChange(amount) {
        setNewMoney(amount)
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            addFunds(newMoney)
        }}>
            <label>Need more money?</label>
            <input type='text' onChange={(e) => handleChange(e.target.value)} value={newMoney}/>
            <input type='submit' value='Add Funds'></input>
        </form>
    )
}

export default FundsForm