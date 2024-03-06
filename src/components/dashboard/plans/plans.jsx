import React from 'react';

const Plans = () => {
  const clientsCount = 5; // Replace this with the actual number of clients from your API or state management.

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Plans</h1>
        <p className="text-xl font-semibold mb-8">Current Number of Plans: {clientsCount}</p>

        {/* Add other components or elements here, such as a table displaying client information. */}
      </div>
    </div>
  );
};

export default Plans;