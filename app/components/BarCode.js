    
    "use client";
    // import React, { useState } from 'react';
    // import { useBarcode } from '@createnextapp/react-barcode';
    import jsonData from './jsonFile2.json'
     import BarScanner from './BarScanner';



    function BarCode() {
       
        return (
        <div className="mx-auto grid grid-cols-2 w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-2">
            {jsonData.map((item) => (
            <BarScanner key={item["ITEM ID"]} item={item} />
            ))}
        </div>
        );
    }


    export default BarCode;