import { ChevronDown, Clock, TrendingUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const DashboardCard = ({ data }) => {
    const { symbol, price, signal: signalStatus, action } = data;
    
  // Destructure data object

  return (
    <div className='w-full h-32 border border-primary'>
      <div className='w-full h-32 flex items-center py-5'>

        {/* Left section: Symbol + Type */}
        <div className='w-2/6 h-full flex justify-evenly items-center'>
          <div className='w-1/2 h-full flex items-center px-5'>
            <img src={`/icons/${symbol.toLowerCase()}.svg`} className='w-16 h-16' alt={symbol} />
            <div className='pl-5'>
              <p className='font-bold font-Mona text-[16px]'>{symbol}</p>
              <p className='font-bold font-Mona text-[16px] text-gray-700'>Spot Mid Term</p>
            </div>
          </div>

          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center'>
              <TrendingUp color={signalStatus === 'buy' ? '#99eba4' : '#f87171'} />
              <p className='text-price font-bold font-Mona pl-2'>{signalStatus}</p>
            </div>
            <p className='text-gray-700 font-bold font-Mona'>Current Interest</p>
          </div>
          <div className='w-px h-14 border border-white/50'></div>
        </div>

        {/* Middle section: Price + Duration */}
        <div className='w-2/6 h-full flex py-5'>
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <p className='text-price font-bold font-Mona'>{price} $</p>
            <p className='text-gray-700 font-bold font-Mona'>Current Price $</p>
          </div>
          <div className='w-px h-14 border border-white/50'></div>
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center'>
              <Clock color='#fda656' />
              <p className='text-time font-bold font-Mona pl-2'>1-3 Minutes</p>
            </div>
            <p className='text-gray-700 font-bold font-Mona'>Signal Duration</p>
          </div>
          <div className='w-px h-14 border border-white/50'></div>
        </div>

        {/* Right section: Action + Trend */}
        <div className='w-2/6 h-full flex py-5'>
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <p className='text-primary font-bold font-Mona'>1/4</p>
            <p className='text-gray-700 font-bold font-Mona'>Take Taken</p>
          </div>
          <div className='w-px h-14 border border-white/50'></div>
          <div className='w-1/2 h-full flex flex-col justify-center items-center'>
            <div className='w-1/2 h-full flex justify-center items-center'>
              <TrendingUp color={signalStatus === 'buy' ? '#99eba4' : '#f87171'} />
              <p className='text-bullish font-Mona font-bold pl-2'>{action}</p>
            </div>
            <p className='font-bold font-Mona text-gray-700'>Trend</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCard;
