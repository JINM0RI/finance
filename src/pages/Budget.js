import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Budget = () => {
  const [income, setIncome] = useState('');
  const [groceries, setGroceries] = useState('');
  const [emi, setEMI] = useState('');
  const [loan, setLoan] = useState('');
  const [clothes, setClothes] = useState('');
  const [budget, setBudget] = useState('');
  const [pieChartData, setPieChartData] = useState({
    series: [],
    options: {
      labels: [],
    },
  });

  const calculateBudget = () => {
    // Calculate total expenses
    const totalExpenses = parseFloat(groceries) + parseFloat(emi) + parseFloat(loan) + parseFloat(clothes);

    // Calculate remaining budget
    const budgetResult = parseFloat(income) - totalExpenses;
    setBudget(budgetResult);

    // Update pie chart data
    const expensesLabels = ['Groceries', 'EMI', 'Loan', 'Clothes'];
    const expensesData = [parseFloat(groceries), parseFloat(emi), parseFloat(loan), parseFloat(clothes)];

    setPieChartData({
      series: expensesData,
      options: {
        labels: expensesLabels,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-16">
      <h1 className="text-4xl font-bold mb-8">Budget Allocator</h1>
      <div className="flex flex-col items-center w-64">
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Income"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={groceries}
          onChange={(e) => setGroceries(e.target.value)}
          placeholder="Groceries"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={emi}
          onChange={(e) => setEMI(e.target.value)}
          placeholder="EMI"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
          placeholder="Loan"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={clothes}
          onChange={(e) => setClothes(e.target.value)}
          placeholder="Clothes"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={calculateBudget}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate Budget
        </button>
      </div>
      {budget !== '' && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Your Remaining Budget:</h2>
          <p className="text-2xl font-bold text-green-500">${budget}</p>
        </div>
      )}
      <div className="mt-8" style={{ width: '400px' }}>
        <h2 className="text-xl font-bold mb-4">Expense Distribution</h2>
        <ReactApexChart
          options={pieChartData.options}
          series={pieChartData.series}
          type="pie"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Budget;
