import React, {useState, useEffect} from "react";
import FundsForm from "./FundsForm";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([])
  const [money, setMoney] = useState(200)
  const [sushiList, setSushiList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then(resp => resp.json())
    .then(setSushiList)
  }, [])

  function chargeCustomer(price) {
    console.log('my price was $' + price)
    setMoney(money => money - price)
    setPlates(plates => [...plates, ''])
  }

  function addFunds(funds) {
    setMoney(money => money + parseInt(funds))
  }

  function eatSushiDestructively(id) {
    fetch(`http://localhost:3001/sushis/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        img_url: ''
      })
    })
    .then(resp => resp.json())
    .then((newSush) => {
      const newSushiList = [...sushiList]
      newSushiList[id-1] = newSush
      setSushiList(newSushiList)
    })

  }
  
  return (
    <div className="app">
      <SushiContainer sushi={sushiList} chargeCustomer={chargeCustomer} money={money} eatSushiDestructively={eatSushiDestructively}/>
      <Table money={money} plates={plates}/>
      <FundsForm addFunds={addFunds}/>
    </div>
  );
}

export default App;
