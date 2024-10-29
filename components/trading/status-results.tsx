'use client';

import { AlertTriangle, CheckCircle, DollarSign } from 'lucide-react';

interface StatusResultsProps {
  isMarginGood: boolean;
  tpAmount: string;
  tpPercentage: string;
}

export default function StatusResults({ isMarginGood, tpAmount, tpPercentage }: StatusResultsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className={`bg-gray-700/50 rounded-lg p-6 text-center space-y-2 border ${isMarginGood ? 'border-red-500' : 'border-green-500'}`}>
        <div className="text-gray-400 flex items-center justify-center space-x-2">
          {isMarginGood ? (
            <AlertTriangle className="w-5 h-5 text-red-400" />
          ) : (
            <CheckCircle className="w-5 h-5 text-green-400" />
          )}
          <span>Margin Status</span>
        </div>
        <div className={`text-2xl font-bold ${isMarginGood ? 'text-red-400' : 'text-green-400'}`}>
          {isMarginGood ? 'Not Enough Margin' : 'Good'}
        </div>
      </div>
      <div className="bg-gray-700/50 rounded-lg p-6 text-center space-y-2 border border-gray-600">
        <div className="text-gray-400 flex items-center justify-center space-x-2">
          <DollarSign className="w-5 h-5 text-green-400" />
          <span>Entry TP Amount</span>
        </div>
        <div className="text-2xl font-bold">
          <span className="text-white">${tpAmount}</span>
          <span className="text-green-400 text-lg ml-2">({tpPercentage}%)</span>
        </div>
      </div>
    </div>
  );
}