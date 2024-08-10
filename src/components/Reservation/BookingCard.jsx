import React, { useState } from "react";
import Calendar from "./Calendar";
import GuestsSelector from "./GuestsSelector";
import PriceDetails from "./PriceDetails";

const BookingCard = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const formatDate = (date) => {
    if (!date) return "";
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate - checkInDate);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const nights = calculateNights();

  return (
    <div className="font-inter p-6 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-xl sticky top-4">
      <div className="text-2xl text-black font-semibold">
        <span className="text-gray-500 line-through font-normal">₹3,554</span>
        <span>
          {" "}
          ₹3,436 <span className="text-lg font-normal">night</span>
        </span>
      </div>

      <div className="border border-gray-300 rounded-lg mt-4 overflow-hidden">
        <div className="flex">
          <div className="w-1/2 p-2 border-r border-gray-300">
            <label
              className="block text-xs font-bold text-gray-700 p-x-4"
              htmlFor="check-in"
            >
              CHECK-IN
            </label>
            <div
              className="w-full bg-white p-2 cursor-pointer"
              onClick={() => setIsCalendarOpen(true)}
            >
              <span className={checkInDate ? "text-black" : "text-gray-400"}>
                {checkInDate ? formatDate(checkInDate) : "Add date"}
              </span>
            </div>
          </div>
          <div className="w-1/2 p-2">
            <label
              className="block text-xs font-bold text-gray-700"
              htmlFor="check-out"
            >
              CHECKOUT
            </label>
            <div
              className="w-full bg-white p-2 cursor-pointer"
              onClick={() => setIsCalendarOpen(true)}
            >
              <span className={checkOutDate ? "text-black" : "text-gray-400"}>
                {checkOutDate ? formatDate(checkOutDate) : "Add date"}
              </span>
            </div>
          </div>
        </div>

        <GuestsSelector
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
          infants={infants}
          setInfants={setInfants}
          pets={pets}
          setPets={setPets}
          guestsOpen={guestsOpen}
          setGuestsOpen={setGuestsOpen}
        />
      </div>

      <Calendar
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
      />

      <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg mt-4 font-bold">
        Reserve
      </button>
      <div className="text-center text-gray-500 mt-2">
        You won't be charged yet
      </div>

      <PriceDetails
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        nights={nights}
      />
    </div>
  );
};

export default BookingCard;
