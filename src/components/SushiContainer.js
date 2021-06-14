import React, { useEffect } from "react";
import MoreButton from "./MoreButton";
import { useState } from "react";
import Sushi from './Sushi'

function SushiContainer({sushi, chargeCustomer, money, eatSushiDestructively}) {
  const [indexTracker, setIndexTracker] = useState(0)
  const [currentDisplay, setDisplay] = useState(sushi.slice(0, 4))

  useEffect(() => {
    setDisplay(sushi.slice(indexTracker, indexTracker + 4))       
  }, [indexTracker, sushi])

  function moveBelt() {
    console.log(indexTracker)
    if(indexTracker < 96) {
      setIndexTracker(indexTracker => indexTracker + 4)
    } else {
      setIndexTracker(0)
    }
  }

  return (
    <div className="belt">
      {currentDisplay.map(sushi => <Sushi key={sushi.id} sushi={sushi} chargeCustomer={chargeCustomer} money={money} eatSushiDestructively={eatSushiDestructively}/>)}
      <MoreButton moveBelt={moveBelt}/>
    </div>
  );
}

export default SushiContainer;
