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

  return { calorieGoal, proteinGoal, fatGoal, carbsGoal, loading, error };
};


