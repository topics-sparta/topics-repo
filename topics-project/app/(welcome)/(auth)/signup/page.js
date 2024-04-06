"use client";

import Link from 'next/link';
import { useState } from "react";
import { InfoForm } from "./_components/infoForm";
import { MetricsForm } from "./_components/metricsForm";
import { ChevronLeft } from "lucide-react"

import { signup } from "./actions"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    height: 54,
    weight: 160,
    goal: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const [showNext, setShowNext] = useState(false);
  const toggleNext = (e) => {
    e.preventDefault();
    setShowNext(!showNext);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signup(formData);
      if (user)
        window.location.href = "/";
    } catch (error) {
      console.log(error);
      window.location.href = "/error";
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#FFF7ED] font-poppins">
      <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-[#4C220A]">
        <div className="flex justify-between w-[300px] md:w-[400px] items-center mb-4">

          <div className="w-6 md:w-8">
            {showNext && (
              <button onClick={toggleNext} className="w-8 h-8 md:w-10 md:h-10 border-customAccent border-2 bg-customSecondary rounded-full text-customPrimary hover:text-customAccent transition-colors duration-300">
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}
          </div>
          <div className="text-5xl font-bold">Sign Up</div>
          <div className="w-6 md:w-8"></div>
        </div>

        {showNext ? (
          <MetricsForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} toggleNext={toggleNext} />
        ) : (
          <InfoForm formData={formData} handleInputChange={handleInputChange} toggleNext={toggleNext} />
        )}

        <div className="mt-2 text-sm text-black/40">
          Already have an account?
          <Link href="/login">
            <span className="ml-1 text-customAccent">Log in!</span>
          </Link>
        </div>
      </div>
    </div>
  );

}