'use client';

import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">User Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The user you are looking for does not exist or may have been removed.
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
      <div className="mt-6">
        {/* Replace with emoji or a placeholder image */}
        <span role="img" aria-label="not found" className="text-6xl">
          🤷‍♂️
        </span>
       
      </div>
    </div>
  );
};

export default Page;
