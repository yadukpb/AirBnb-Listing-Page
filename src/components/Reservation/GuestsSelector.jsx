import React, { useRef, useEffect } from "react";
import GuestItem from "./GuestItem";

const GuestsSelector = ({
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
  pets,
  setPets,
  guestsOpen,
  setGuestsOpen,
}) => {
  const guestsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setGuestsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setGuestsOpen]);

  const totalGuests = adults + children;

  return (
    <div className="p-2 border-t border-gray-300" ref={guestsRef}>
      <label className="block text-xs font-bold text-gray-700" htmlFor="guests">
        GUESTS
      </label>
      <div
        className="w-full bg-white p-2 cursor-pointer"
        onClick={() => setGuestsOpen(!guestsOpen)}
      >
        {totalGuests} {totalGuests === 1 ? "guest" : "guests"}
        {infants > 0 && `, ${infants} ${infants === 1 ? "infant" : "infants"}`}
        {pets > 0 && `, ${pets} ${pets === 1 ? "pet" : "pets"}`}
      </div>

      {guestsOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 z-10 left-0 right-0 border border-gray-200">
          <GuestItem
            title="Adults"
            description="Age 13+"
            count={adults}
            setCount={setAdults}
            min={1}
            max={6 - children}
          />
          <GuestItem
            title="Children"
            description="Ages 2–12"
            count={children}
            setCount={setChildren}
            max={6 - adults}
          />
          <GuestItem
            title="Infants"
            description="Under 2"
            count={infants}
            setCount={setInfants}
            max={5}
          />
          <GuestItem
            title="Pets"
            description={
              <a href="#" className="underline">
                Bringing a service animal?
              </a>
            }
            count={pets}
            setCount={setPets}
            max={5}
          />
          <p className="text-sm text-gray-500">
            This place has a maximum of 6 guests, not including infants. If
            you're bringing more than 2 pets, please let your Host know.
          </p>
          <button
            onClick={() => setGuestsOpen(false)}
            className="mt-4 right-0  text-black py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestsSelector;
