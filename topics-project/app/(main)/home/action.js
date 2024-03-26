// Function for getting list of foods and mapping to array
// Function for getting the cals ( Might be located in api/get-daily-calories)

import { useState, useEffect } from 'react';

export const useFetchCalories = (userID) => {
  const [calories, setCalories] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/get-daily-calories?userID=${userID}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setCalories(data.calories);
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

  return { calories, loading, error };
};

export default useFetchCalories;

