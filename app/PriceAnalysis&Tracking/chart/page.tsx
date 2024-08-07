"use client";

import PriceChart from '@/components/Chart';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Page() {
  const searchParams = useSearchParams();

  const crop = searchParams.get('crop');
  const unit = searchParams.get('unit'); // Get the unit from the query parameters

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <PriceChart crop={crop} unit={unit} /> {/* Pass both crop and unit as props */}
      </div>
    </div>
  );
}
