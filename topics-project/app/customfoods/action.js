"use server";
import { createClient } from "/src/utils/supabase/server";
//import { useState } from "react";


/*
export async function validateForm(formData) {
    // need to validate the form to make sure it works, 
    const data = {
        food_name: formData.get("Food Name"),
        calories: formData.get("Calorie Count"),
        protein: formData.get("Protien"),
        fat: formData.get("Fat"),
        carbs: formData.get("Carbs")
        
      };

    // if all inputs are valid return true
    return true
    // if inputs are bad return False
}
*/ 

export async function sendData(formData) {
    const data = {
        food_name: formData.get("Food Name"),
        calories: formData.get("Calorie Count"),
        protein: formData.get("Protein"),
        fat: formData.get("Fat"),
        carbs: formData.get("Carbs")
    };

    try {
        console.log(data);
        // Example: Send data to Supabase
        // const { error } = await supabase.from('foods').insert([data]);
        // if (error) throw error;
        console.log("Data sent to Supabase successfully");
    } catch (error) {
        console.error("Failed to send data to Supabase: ", error);
        throw error; // Re-throw the error so it can be caught by the caller
    }
}


export async function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting traditionally
  console.log('handleSubmit is triggered');
}
  