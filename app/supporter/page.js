'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SupporterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('Please enter a valid username');
      return;
    }

    // Redirect to the user's page
    router.push(`/${searchQuery}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 md:justify-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Search Your Favorite User</h1>
      <div className="w-1/2 flex flex-col items-center gap-4">
        <input
          type="text"
          className="w-full px-4 py-2 text-black rounded-md"
          placeholder="Enter username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all"
        >
          Search
        </button>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-green-600 rounded-md hover:bg-green-700 transition-all"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default SupporterPage;
