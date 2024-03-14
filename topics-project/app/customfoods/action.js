"use server";
import { createClient } from "/src/utils/supabase/server";
import { redirect } from "next/navigation";

//import { useState } from "react";

// if i use use state to get rid of the form
// then i have to import it
// to import use state i have to do use client;
// however doing this gives an error for using supabase

/*
the error says imprtantign a component that needs next/headers that only works
in  server component which is not supoprted in the pages/directory
*/
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
    console.log(formData)
    };
/*
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
*/

/*
export async function handleSubmit(event) {
    const data = {
        food_name: event.get("Food Name"),
        calories: event.get("Calorie Count"),
        protein: event.get("Protein"),
        fat: event.get("Fat"),
        carbs: event.get("Carbs")
    };




  console.log(data);
  */

  