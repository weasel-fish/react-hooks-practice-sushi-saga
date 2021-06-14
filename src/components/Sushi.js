import React, {useState} from "react";

function Sushi({sushi, chargeCustomer, money, eatSushiDestructively}) {
  const [eaten, setEaten] = useState(false)
  const {name, img_url, price, id} = sushi

  function handleClick() {
    if(!eaten && money > price){
      setEaten(!eaten)
      chargeCustomer(price)
      eatSushiDestructively(id)
    } else if(!eaten) {
      console.log("You don't have enough money!")
    } else {
      console.log('You already ate this piece!')
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {(eaten || img_url === '') ? <p>I was eaten!</p> : (
          <img
            src={img_url}
            alt={name+" Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
