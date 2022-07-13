import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  //remove food
  //===========
  // function handleLiClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !== id);
  //   setFoods(newFoodArray);
  // }

  //adjust heatLevel
  //================
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  //FilterByCuisine
  //===============
  const [filterBy, setFilterBy] = useState("All");

  function handleFilterChange(e) {
    setFilterBy(e.target.value);
  }

  const foodsDisplayed = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  //Final food list
  //===============
  const foodList = foodsDisplayed.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>

      {/* filter foodList */}
      {/* ======================= */}
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
