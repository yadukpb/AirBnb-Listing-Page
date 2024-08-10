import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";

const Calendar = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  isCalendarOpen,
  setIsCalendarOpen,
}) => {
  const calendarRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsCalendarOpen]);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay();
    const calendar = [];

    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(i);
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(date);
      setCheckOutDate(null);
    } else if (date > checkInDate) {
      setCheckOutDate(date);
    } else {
      setCheckInDate(date);
      setCheckOutDate(null);
    }
  };

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

  const isDateSelectable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  if (!isCalendarOpen) return null;

  return (
    <div
      ref={calendarRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full">
        <div className="text-2xl font-bold mb-4">
          {nights} {nights === 1 ? "night" : "nights"}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded ${checkInDate ? "bg-gray-100" : ""}`}>
              <div className="text-xs font-semibold text-gray-500">CHECK-IN</div>
              <div>{checkInDate ? formatDate(checkInDate) : "Add date"}</div>
            </div>
            <div className={`p-2 rounded ${checkOutDate ? "bg-gray-100" : ""}`}>
              <div className="text-xs font-semibold text-gray-500">CHECKOUT</div>
              <div>{checkOutDate ? formatDate(checkOutDate) : "Add date"}</div>
            </div>
          </div>
          <button
            onClick={() => setIsCalendarOpen(false)}
            className="text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth}>
            <ChevronLeft />
          </button>
          <div className="text-lg font-semibold">
            {months[currentMonth]} {currentYear}
          </div>
          <button onClick={handleNextMonth}>
            <ChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-400"
            >
              {day}
            </div>
          ))}
          {generateCalendar(currentMonth, currentYear).map((day, index) => {
            const date = day
              ? new Date(currentYear, currentMonth, day)
              : null;
            const isSelectable = date && isDateSelectable(date);
            const isSelected =
              (checkInDate &&
                date &&
                date.getTime() === checkInDate.getTime()) ||
              (checkOutDate &&
                date &&
                date.getTime() === checkOutDate.getTime());
            const isInRange =
              checkInDate &&
              checkOutDate &&
              date &&
              date > checkInDate &&
              date < checkOutDate;

            return (
              <div
                key={index}
                className={`p-2 text-center text-sm rounded-full 
                  ${
                    isSelectable
                      ? "hover:bg-gray-100 cursor-pointer"
                      : "text-gray-300 cursor-not-allowed"
                  }
                  ${isSelected ? "bg-black text-white" : ""}
                  ${isInRange ? "bg-gray-100" : ""}
                `}
                onClick={() => isSelectable && handleDateClick(day)}
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center">
          <button className="flex items-center text-sm text-gray-600">
            <Keyboard className="w-4 h-4 mr-1" />
          </button>
          <div>
            <button
              onClick={() => {
                setCheckInDate(null);
                setCheckOutDate(null);
              }}
              className="text-sm underline mr-4"
            >
              Clear dates
            </button>
            <button
              onClick={() => setIsCalendarOpen(false)}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
