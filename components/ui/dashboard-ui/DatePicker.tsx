"use client";

import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, ChevronDown } from "lucide-react";

interface DateSelectorProps {
  value?: Date;
  onChange?: (date: Date | null) => void;
}

const CustomDateButton = forwardRef<
  HTMLDivElement,
  {
    value?: string;
    onClick?: () => void;
  }
>(({ value, onClick }, ref) => (
  <div
    ref={ref}
    onClick={onClick}
    className="creatorshelf-dashboard-analytics-btn-control"
    style={{ cursor: "pointer" }}
  >
    <Calendar size={16} />
    <span>{value}</span>
    <ChevronDown size={14} />
  </div>
));

CustomDateButton.displayName = "CustomDateButton";

export default function DateSelector({
  value,
  onChange,
}: DateSelectorProps) {
  const [internalDate, setInternalDate] = useState<Date | null>(
    value || new Date()
  );

  const selectedDate = value ?? internalDate;

  const handleChange = (date: Date | null) => {
    setInternalDate(date);

    if (onChange) {
      onChange(date);
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="MMM dd, yyyy"
      customInput={<CustomDateButton />}
    />
  );
}