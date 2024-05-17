import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { calender } from "../../assets";
import { motion } from "framer-motion";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  return (
    <>
      <motion.div
        className="relative"
        ref={calendarRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-[48px] h-[48px] cursor-pointer hover:bg-[#191f3f]/50 transition-colors bg-[#ffff]/5 backdrop-blur-md border border-[#fff]/20 rounded-full flex items-center justify-center"
          onClick={toggleCalendarVisibility}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={calender} className="w-[19.5px] h-[21.5px]" alt="" />
        </motion.div>
        {isCalendarVisible && (
          <motion.div
            className="absolute top-full left-1 mt-1 w-[200px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholderText="Select date"
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Calender;
