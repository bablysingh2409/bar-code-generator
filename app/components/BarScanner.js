"use client"
import React, { useState } from 'react';
import Barcode from 'react-barcode';

function BarScanner({ item }) {
  const barCode = item?.BARCODE || '';
  const itemName = item?.['ITEM NAME'] || '';
  const sellingPrice = item?.['SELLING PRICE'] || '';

  return (
    <div className="rounded-md border flex items-center flex-wrap w-[90%]   flex-col justify-center ml-9">
      <Barcode value={barCode} width={1.5} height={30} background="#ffffff" fontSize={20} margin={10} fontOptions="bold" />
      <div className="">
        <h1 className="inline-flex items-center text-lg font-semibold">{itemName}</h1>
        <div className=" mt-1 flex items-center space-x-2">
          <span className="block text-sm font-semibold">MRP : </span>
          <span className="block cursor-pointer  px-2 text-xs font-medium">{item["MRP PRICE"]}</span>
        </div>
        <div className="mt-1 flex items-center space-x-2">
          <span className="block text-sm font-semibold">Selling Price : </span>
          <span className="block cursor-pointer  px-2 text-xs font-medium">{sellingPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default BarScanner;

  