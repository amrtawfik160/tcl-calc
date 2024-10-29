'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AccountHeader from '@/components/trading/account-header';
import TradingInfo from '@/components/trading/trading-info';
import TradingParameters from '@/components/trading/trading-parameters';
import StatusResults from '@/components/trading/status-results';
import AddOnTable from '@/components/trading/add-on-table';
import { calculateTpAmount, calculateTpPercentage, checkMarginStatus } from '@/lib/calculations';

export default function TradingCalculator() {
  const [accountSize, setAccountSize] = useState(100);
  const [position, setPosition] = useState('LONG');
  const [symbol, setSymbol] = useState('SOL');
  const [limit, setLimit] = useState(176.49);
  const [tp, setTp] = useState(180);
  const [sl, setSl] = useState(172.87);
  const [leverage, setLeverage] = useState(50);
  const [qty, setQty] = useState(0.6);

  const addOns = [
    { price: 175.21, qty: 1.8 },
    { price: 174.06, qty: 3.0 },
  ];

  const isMarginGood = checkMarginStatus(accountSize, leverage, limit, qty);

  return (
    <Card className="w-full max-w-4xl bg-gradient-to-b from-gray-800 to-gray-900 text-white border-gray-700 shadow-2xl">
      <AccountHeader accountSize={accountSize} setAccountSize={setAccountSize} />
      <CardContent className="space-y-8 p-6">
        <TradingInfo
          position={position}
          setPosition={setPosition}
          symbol={symbol}
          qty={qty}
          setQty={setQty}
        />
        <TradingParameters
          limit={limit}
          setLimit={setLimit}
          tp={tp}
          setTp={setTp}
          sl={sl}
          setSl={setSl}
          leverage={leverage}
          setLeverage={setLeverage}
        />
        <StatusResults
          isMarginGood={isMarginGood}
          tpAmount={calculateTpAmount(tp, limit, qty, accountSize, leverage)}
          tpPercentage={calculateTpPercentage(tp, limit, qty, accountSize, leverage)}
        />
        <AddOnTable
          addOns={addOns}
          accountSize={accountSize}
          leverage={leverage}
        />
      </CardContent>
    </Card>
  );
}