import TradingCalculator from '@/components/trading-calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <TradingCalculator />
    </main>
  );
}