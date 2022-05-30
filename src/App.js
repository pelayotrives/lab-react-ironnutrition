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

  const [totalFood, setTotalFood] = useState([]) // Cuando declaramos un estado, y sabemos que va a ser un objeto complejo, los declaramos como su tipo de data aunque esté vacío, es decir, en este caso, "[]".

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

    //! Creamos un unuevo array en el que le pasamos la comida nueva a añadir al array inicial.
    const newArray = [...allFoods, FoodToAdd];
    //! Hacemos que el formulario se esconda una vez agregamos producto.
    setHideForm(false);
    //! Seteamos el estado de las comidas con el nuevo array.
    setAllFoods(newArray);
    //! IMPORTANTE --> Seteamos el estado de las COMIDAS FILTRADAS con el nuevo array.
    setFilteredFoods(newArray);
  }

  // ------------------------------------

  const searchList = (searchProps) => {
    //console.log(searchProps);
    const filteredArr = allFoods.filter((eachFood) => {
      //! Filtramos para que el nombre de cada elemento que filtremos incluya todas las letras del targeteo de SearchProps.
      return eachFood.name.includes(searchProps);
    });

    console.log(filteredArr);
    setFilteredFoods(filteredArr);
  };

  // ------------------------------------

  const addTotalFood = (theFood) => {
    console.log(theFood);
    // setTotalFood([...totalFood], theFood) -> ASÍ LE PASARÍA 2 ARGUMENTOS POR SEPARADO
    setTotalFood( [...totalFood, theFood] ) // LO QUE QUIERO ES ACTUALIZAR CON UN NUEVO VALOR EL ESTADO, LO PASAMOS DENTRO DEL ARRAY.
  }

  // ------------------------------------

  return (
    <div className="App">
      <br />
      <h1 className="title">IronNutrition</h1>
      <Search searchList={searchList} />
      <br />
      <button onClick={handleHideForm} className="button is-info">
        Add new foods
      </button>
      {/* Lifting the State Up: Paso 2 */}
      {/* Le pasamos como props la función que añade items y que oculta el form (le ponemos el mismo nombre por syntax) */}
      {hideForm === true && (
        <AddFood addFood={addFood} handleHideForm={handleHideForm} />
      )}
      <br />
      <br />

      {/* Aquí tenemos que iterar sobre el array actualizado y no sobre el inicial (allFoods, al cual ya hemos pusheado) */}
      {filteredFoods.map((eachFood, index) => {
        return (
        <Foodbox
        key={eachFood.name + index}
        foodProp={eachFood}
        addTotalFood={addTotalFood}/>
        )
      })}

      <hr />
      <br />
        <FoodTotal totalFood={totalFood}/>
      <br />
      <hr />

    </div>
  );
}

export default App;
