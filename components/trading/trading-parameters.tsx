'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowUpRight, ArrowDownRight, Scale, Gauge } from 'lucide-react';

interface TradingParametersProps {
  limit: number;
  setLimit: (value: number) => void;
  tp: number;
  setTp: (value: number) => void;
  sl: number;
  setSl: (value: number) => void;
  leverage: number;
  setLeverage: (value: number) => void;
}

export default function TradingParameters({
  limit, setLimit,
  tp, setTp,
  sl, setSl,
  leverage, setLeverage
}: TradingParametersProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label className="flex items-center space-x-2">
          <Scale className="w-4 h-4 text-blue-400" />
          <span>LIMIT</span>
        </Label>
        <Input
          type="number"
          value={limit}
          onChange={(e) => setLimit(parseFloat(e.target.value))}
          className="bg-gray-700/50 border-gray-600 hover:border-blue-500/50 focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <Label className="flex items-center space-x-2">
          <ArrowUpRight className="w-4 h-4 text-green-400" />
          <span>TP</span>
        </Label>
        <Input
          type="number"
          value={tp}
          onChange={(e) => setTp(parseFloat(e.target.value))}
          className="bg-gray-700/50 border-gray-600 hover:border-green-500/50 focus:border-green-500 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <Label className="flex items-center space-x-2">
          <ArrowDownRight className="w-4 h-4 text-red-400" />
          <span>SL</span>
        </Label>
        <Input
          type="number"
          value={sl}
          onChange={(e) => setSl(parseFloat(e.target.value))}
          className="bg-gray-700/50 border-gray-600 hover:border-red-500/50 focus:border-red-500 transition-colors"
        />
      </div>
      <div className="space-y-2">
        <Label className="flex items-center space-x-2">
          <Gauge className="w-4 h-4 text-yellow-400" />
          <span>Leverage</span>
        </Label>
        <Input
          type="number"
          value={leverage}
          onChange={(e) => setLeverage(parseFloat(e.target.value))}
          className="bg-gray-700/50 border-gray-600 hover:border-yellow-500/50 focus:border-yellow-500 transition-colors"
        />
      </div>
    </div>
  );
}