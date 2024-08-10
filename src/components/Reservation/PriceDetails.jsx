import React from "react";

const PriceDetails = ({ checkInDate, checkOutDate, nights }) => {
  if (!checkInDate || !checkOutDate) return null;

  const nightlyRate = 3436;
  const weeklyDiscount = Math.floor(nights * 100);
  const serviceFee = Math.floor(nightlyRate * nights * 0.15);
  const totalBeforeTaxes = nightlyRate * nights - weeklyDiscount + serviceFee;

  return (
    <div className="mt-4">
      <div className="flex justify-between ">
        <span className="underline">₹{nightlyRate} x {nights} nights</span>
        <span>₹{nightlyRate * nights}</span>
      </div>
      <div className="flex justify-between text-black mt-2">
        <span>Weekly stay discount</span>
        <span className="text-green-600">-₹{weeklyDiscount}</span>
      </div>
      <div className="flex justify-between mt-2">
        <a href="#" className="text-black underline">
          Airbnb service fee
        </a>
        <span>₹{serviceFee}</span>
      </div>
      <div className="border-t mt-4 pt-4"></div>
      <div className="flex justify-between mt-2 font-semibold">
        <span>Total before taxes</span>
        <span>₹{totalBeforeTaxes}</span>
      </div>
    </div>
  );
};

export default PriceDetails;
