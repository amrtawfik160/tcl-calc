'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ArrowUpDown, Coins } from 'lucide-react';

interface TradingInfoProps {
  position: string;
  setPosition: (value: string) => void;
  symbol: string;
  qty: number;
  setQty: (value: number) => void;
}

export default function TradingInfo({ position, setPosition, symbol, qty, setQty }: TradingInfoProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="relative group">
        <Select value={position} onValueChange={setPosition}>
          <SelectTrigger className="bg-gray-700/50 border-gray-600 hover:border-green-500/50 transition-colors">
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="w-4 h-4 text-green-400" />
              <SelectValue placeholder="Position" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="LONG">LONG</SelectItem>
            <SelectItem value="SHORT">SHORT</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-md font-bold text-white shadow-lg">
        {symbol}
      </div>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <Coins className="w-4 h-4 text-gray-400" />
        </div>
        <Input
          type="number"
          value={qty}
          onChange={(e) => setQty(parseFloat(e.target.value))}
          className="pl-10 bg-gray-700/50 border-gray-600 hover:border-green-500/50 focus:border-green-500 transition-colors"
          placeholder="Quantity"
        />
      </div>
    </div>
  );
}