"use client";

import { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Failed to fetch meal ideas:", error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
