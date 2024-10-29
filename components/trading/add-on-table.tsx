'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { calculateNewTp, calculateAddonTpAmount, calculateAddonTpPercentage } from '@/lib/calculations';
import { Plus, Target } from 'lucide-react';

interface AddOn {
  price: number;
  qty: number;
}

interface AddOnTableProps {
  addOns: AddOn[];
  accountSize: number;
  leverage: number;
}

export default function AddOnTable({ addOns, accountSize, leverage }: AddOnTableProps) {
  return (
    <div className="rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-700/50 p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold flex items-center space-x-2">
          <Plus className="w-5 h-5 text-green-400" />
          <span>Add-on Positions</span>
        </h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-gray-700/50">
            <TableHead className="text-gray-400">Add on</TableHead>
            <TableHead className="text-gray-400">Price</TableHead>
            <TableHead className="text-gray-400">Qty</TableHead>
            <TableHead className="text-gray-400">New TP</TableHead>
            <TableHead className="text-gray-400">TP Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {addOns.map((addon, index) => {
            const newTp = calculateNewTp(addon.price);
            const tpAmount = calculateAddonTpAmount(addon.price, addon.qty, accountSize, leverage);
            const tpPercentage = calculateAddonTpPercentage(tpAmount, accountSize);
            
            return (
              <TableRow key={index} className="hover:bg-gray-700/50">
                <TableCell className="font-medium">Limit {index + 1}</TableCell>
                <TableCell>${addon.price}</TableCell>
                <TableCell>{addon.qty}</TableCell>
                <TableCell className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-green-400" />
                  <span>${newTp}</span>
                </TableCell>
                <TableCell>
                  <span className="text-white">${tpAmount}</span>
                  <span className="text-green-400 ml-2">({tpPercentage}%)</span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}