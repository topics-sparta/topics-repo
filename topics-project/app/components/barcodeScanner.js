"use client"

import React, { useState } from 'react';
import BarCodeScanner from 'barcode-react-scanner';

export const MyBarcodeScanner = () => {
  const [code, setCode] = useState('');

  return (
    <>
      <div>{code}</div>

      <BarCodeScanner onUpdate={(err, resp) => {
        if (resp) {
          console.log(resp.text)
          setCode(resp.text);
        }
      }}
      />
    </>
  );
};