"use client";

import React, { useState, useEffect, use } from 'react';
import BarCodeScanner from 'barcode-react-scanner';
import { X } from 'lucide-react';
import Webcam from "react-webcam";
import { useRouter } from 'next/navigation';

export default function BarcodePage() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCode(value);
  };

  const handleSubmit = async () => {
    try {
        router.push(`/foodItem?barcode=${code.substring(1)}`);
    } catch (error) {
      console.error(error);
      // TODO: show error message to user
    }

  }

  useEffect(() => {
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.style.height = '0vh';
    }
  }, []);
  return (

    <>
      <div className="bg-customPrimary h-screen flex">
        <div className='z-50 absolute top-4 right-4 bg-customPrimary rounded-full p-2 laptop:text-3xl text-customSecondary'><X /></div>
        <div className='w-full laptop:w-7/12 xl:w-6/12'>
          <div className='laptop:w-7/12 xl:w-6/12 w-full absolute z-50 flex flex-col items-center'>
            <div className='font-bold z-50 text-customPrimary text-2xl laptop:text-3xl xl:text-4xl mt-24 mb-2 laptop:mb-20'>Place barcode into the square</div>
            <div className='border-2 z-50 rounded-xl border-customSecondary w-96 h-56'></div>
          </div>
          <Webcam className='w-full h-screen object-cover' />
          <BarCodeScanner onUpdate={(err, resp) => {
            if (resp) {
              setCode(resp.text);
              handleSubmit();
            }
          }}
          />
        </div>


        <div className="z-50 absolute laptop:z-0 laptop:relative flex flex-col items-center laptop:items-start p-4 bg-customPrimary w-full rounded-t-xl bottom-0 laptop:w-32 h-60">
          <div className="font-bold text-3xl laptop:text-3xl xl:text-4xl laptop:w-80 xl:w-96 text-customAccent mb-8">Scan Barcode</div>
          <input
            className="bg-customSecondary/25 p-2 w-80 xl:w-96 rounded-md h-12"
            placeholder="Enter barcode here..."
            id="barcode"
            name="barcode"
            type="text"
            value={code}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="w-80 xl:w-96 mt-3 h-10 flex justify-center items-center rounded-full bg-customSecondary text-customPrimary hover:text-customPrimary hover:bg-customAccent transition-colors duration-300">
            <p className="font-bold text-base laptop:text-xl">Continue</p>
          </button>
        </div>
      </div>
    </>

  );
}
