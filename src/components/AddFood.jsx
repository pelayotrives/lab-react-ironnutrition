import React from 'react';
import { useState } from 'react';

function AddFood(props) {

  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const { addFood, handleHideForm } = props
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Haciendo submit.', event.target);
    
    //* Nuevo objeto a añadir.
    //! Lifting the State Up: Paso 3
    const newFood = {
        name,
        calories,
        image
    }

    //* Invocamos la función que viene por props y le pasamos el item que queremos agregar.
    //! Lifting the State Up: Paso 4
    addFood(newFood)
    handleHideForm()

    //* Comprobamos que existe al apretar botón.
    // console.log(newFood);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    console.log(event.target.value);
    setCalories(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  return (
    <div>
      {/* Enviamos el formulario y, con ello, se crea el objeto. */}
      <form onSubmit={handleSubmit}>
        <br />

        <label htmlFor="name">Name: </label>
        <br />
        <br />
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <br />
        <br />

        <label htmlFor="calories">Number of calories: </label>
        <br />
        <br />
        <input
          className="input"
          type="text"
          name="calories"
          value={calories}
          onChange={handleCaloriesChange}
        />

        <br />
        <br />

        <label htmlFor="">Image: </label>
        <br />
        <br />
        <input
          className="input"
          type="text"
          name="image"
          value={image}
          onChange={handleImageChange}
        />

        <br />
        <br />

        <button className="button is-info">Add</button>
      </form>
    </div>
  );
}

export default AddFood;
