import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {
  let amount = useSelector(store => store.userSection);
  let total = 0.00;
  amount.forEach((element) => {
    if (element.transcationAmount > 0) {
      return total += +element.transcationAmount;
    } else  {
      return total -= -element.transcationAmount
    }
  });
  return (
    <div>
      <h4>Current Balance</h4>
      <h1 id='balance'>${total}</h1>
    </div>
  )
}

export default Balance