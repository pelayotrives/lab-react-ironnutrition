import React, { useState } from 'react';

function Foodbox(props) {

  const { name, calories, image } = props.foodProp;

  //* Estado para componente controlado de añadir del formulario

  const [quantity, setQuantity] = useState(0)

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleClick = () => {
    console.log("Cantidad: " + quantity + " - ", "Producto: " +  name  + " - ", "Calorías: " + calories);
    const theFood = {
      name,
      calories,
      quantity
    }
    props.addTotalFood(theFood)
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="Food" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">

           {/* Botón de añadir */}


            <div className="control">
              <input className="input" type="number" onChange={handleChange} value={quantity}/>
            </div>

            <div className="control">
              <button onClick={handleClick} className="button is-info">Add</button>
            </div>

            {/* ---------------- */}

          </div>
        </div>
      </article>
    </div>
  );
}

export default Foodbox;
