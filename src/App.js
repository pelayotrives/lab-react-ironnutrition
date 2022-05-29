import React, { useState } from 'react';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import FoodTotal from './components/FoodTotal';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  const [allFoods, setAllFoods] = useState(foods); //! Estado que queremos modificar para que, al añadir items, salgan en pantalla.
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [hideForm, setHideForm] = useState(false); // Estado inicial del formulario

  const handleHideForm = () => {
    setHideForm(!hideForm);
  };

  // TODO ---> Lifting the State Up: Paso 1
  //! Comenzamos Lifting The State Up para que los cambios de AddFood se reflejen aquí en App.js.
  function addFood(FoodToAdd) {
    console.log(FoodToAdd);

    // Agrego el item a products.
    // const foodCopy = [...allFoods]
    // foodCopy.push(FoodToAdd)
    // setAllFoods(foodCopy)

    const newArray = [...allFoods, FoodToAdd]
    setHideForm(false)
    setAllFoods(newArray)
    setFilteredFoods(newArray)
  }

  // ------------------------------------

  const searchList = (searchProps) => {

    //console.log(searchProps);
    const filteredArr = allFoods.filter( (eachFood) => {
      return eachFood.name.includes(searchProps);
    })

    console.log(filteredArr);
    setFilteredFoods(filteredArr)
  }

  return (
    <div className="App">
      <br />
      <h1 className="title">IronNutrition</h1>
      <Search searchList={searchList}/>
      <br />
      <button onClick={handleHideForm} className="button is-info">
        Add new foods
      </button>
      {/* Lifting the State Up: Paso 2 */}
      {/* Le pasamos como props la función que añade items y que oculta el form (le ponemos el mismo nombre por syntax) */}
      {hideForm === true && <AddFood addFood={addFood} handleHideForm={handleHideForm}/>}
      <br />
      <br />

      {/* Aquí tenemos que iterar sobre el array actualizado y no sobre el inicial (allFoods, al cual ya hemos pusheado) */}
      {filteredFoods.map((eachFood, index) => {
        return <Foodbox key={eachFood.name+index} foodProp={eachFood} />;
      })}
      <br />
      <FoodTotal/>
      <br />
    </div>
  );
}

export default App;
