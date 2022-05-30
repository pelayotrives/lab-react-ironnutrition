import React from 'react'

function FoodTotal(props) {

  const {totalFood} = props
  console.log(totalFood);

  const total = totalFood.reduce((acc, e) => {
    return acc + (e.calories * e.quantity)
  }, 0)

  return (
    <div>

    {
        
        totalFood.map( (eachFood) => {
            return (
                <p>{eachFood.quantity} {eachFood.name}: {eachFood.calories * eachFood.quantity}</p>
            )
        })
    }

    <p>Total: {total}</p>

    </div>
  )
}

export default FoodTotal