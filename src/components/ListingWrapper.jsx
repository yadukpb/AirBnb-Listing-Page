import React from 'react';


import ListingComponent from './ListingDetails/ListingComponent';

import BookingCard from './Reservation/BookingCard';


const ListingWrapper = () => {
  return (
    <div className="max-w-6xl mx-auto font-sans">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-7/12 px-4 py-4">
          <ListingComponent />
        </div>
        <div className="w-full lg:w-5/12 lg:pl-8">
          <BookingCard />
        </div>
      </div>
      <div className="mt-4 text-right px-4">
        <button className="text-gray-600 underline">Report this listing</button>
      </div>
    </div>
  );
};

export default ListingWrapper;