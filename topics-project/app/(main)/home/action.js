// Function for getting list of foods and mapping to array
// Function for getting the cals ( Might be located in api/get-daily-calories)

import { useState, useEffect } from 'react';



export const useFetchMetrics = (userID) => {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/get-daily-metrics?userID=${userID}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setCalories(data.calories);
          setProtein(data.protein);
          setFat(data.fat);
          setCarbs(data.carbs);
        }
      })
      .catch(error => {
        setError('Failed to fetch data');
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userID]);

  return { calories, fat, protein, carbs, loading, error };
};

export const useFetchUserInfo = (userID) => {
  const [calorieGoal, setCalorieGoal] = useState(0);
  const [proteinGoal, setProteinGoal] = useState(0);
  const [fatGoal, setFatGoal] = useState(0);
  const [carbsGoal, setCarbsGoal] = useState(0);
  const [userName, setuserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/get-user-details/${userID}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setCalorieGoal(data.users.daily_calorie_goal);
          setProteinGoal(data.users.daily_protein_goal);
          setFatGoal(data.users.daily_fat_goal);
          setCarbsGoal(data.users.daily_carb_goal);
          setuserName(data.users.username);
        }
      })
      .catch(error => {
        setError('Failed to fetch data');
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userID]);

  return { calorieGoal, proteinGoal, fatGoal, carbsGoal, userName, loading, error };
};

export const useFetchNutritionByDate = (userID, date) => {
  const [nutritionEntries, setNutritionEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/fetch-nutrition-via-date/${userID}/${date}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          const entries = data.data_by_date.map(entry => ({
            foodName: entry.food_name, 
            calories: entry.calories,
            servings: entry.servings    
          }));
          setNutritionEntries(entries);
        }
      })
      .catch(error => {
        setError('Failed to fetch data');
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userID, date]); 
  return { nutritionEntries, loading, error };
};



