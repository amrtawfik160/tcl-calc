'use client';

import { CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DollarSign } from 'lucide-react';

interface AccountHeaderProps {
  accountSize: number;
  setAccountSize: (value: number) => void;
}

export default function AccountHeader({ accountSize, setAccountSize }: AccountHeaderProps) {
  return (
    <CardHeader className="space-y-4 pb-2">
      <div className="flex items-center justify-center space-x-2">
        <DollarSign className="w-8 h-8 text-green-400" />
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Trading Calculator
        </h2>
      </div>
      <div className="relative">
        <Label htmlFor="accountSize" className="text-sm text-gray-400">
          Account Size
        </Label>
        <div className="relative mt-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
          <Input
            id="accountSize"
            type="number"
            value={accountSize}
            onChange={(e) => setAccountSize(parseFloat(e.target.value))}
            className="pl-8 bg-gray-700/50 border-gray-600 text-2xl font-bold text-center hover:border-green-500/50 focus:border-green-500 transition-colors"
            placeholder="Enter account size"
          />
        </div>
      </div>
    </CardHeader>
  );
}