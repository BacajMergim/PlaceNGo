import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

interface calculatorProps {
  selectedDate?: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function Calendar({ selectedDate, setSelectedDate }: calculatorProps) {
  const defaultClassNames = getDefaultClassNames();

  const handleDaySelect = (date: Date | undefined) => {
    if (!date) {
      setSelectedDate(date);
      return;
    }

    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    setSelectedDate(newDate);
  };

  return (
    <div className="scale-75 xl:scale-100">
      <DayPicker
        classNames={{
          today: `border-amber-500`,
          selected: `border border-black`,
          root: `${defaultClassNames.root}  flex flex-col items-center w-full h-ful`,
          disabled: `${defaultClassNames.disabled} opacity-50`,
          footer: "font-bold text-2xl my-5",
          chevron: "text-black",
        }}
        mode="single"
        showOutsideDays
        fixedWeeks
        weekStartsOn={1}
        selected={selectedDate}
        onSelect={handleDaySelect}
        disabled={{ before: new Date() }}
        footer={
          selectedDate
            ? `Selected: ${selectedDate.toLocaleDateString()}`
            : "Pick a day for your reservation."
        }
      />
    </div>
  );
}
