import React from "react";
import jalaali from "jalaali-js";

const weekdays = [
       "یک‌شنبه",
       "دوشنبه",
       "سه‌شنبه",
       "چهارشنبه",
       "پنج‌شنبه",
       "جمعه",
       "شنبه",
];

function formatDate(input) {
       // فرض: input = "20-04-2025" یعنی DD-MM-YYYY
       const [year, month,day ] = input.split("-").map(Number);
       const date = new Date(year, month - 1, day); // JavaScript: ماه‌ها از 0 شروع می‌شن

       const { jy, jm, jd } = jalaali.toJalaali(date);

       const weekdayName = weekdays[date.getDay()]; // گرفتن روز هفته

       const monthNames = [
              "فروردین",
              "اردیبهشت",
              "خرداد",
              "تیر",
              "مرداد",
              "شهریور",
              "مهر",
              "آبان",
              "آذر",
              "دی",
              "بهمن",
              "اسفند",
       ];

       return `${weekdayName} ${jd} ${monthNames[jm - 1]} ${jy}`;
}

{/*usage => <ConvertDate date="2025-07-13"/> */}

export default function ConvertDate({date}) {
       const formatted = formatDate(date);
       return <span>{formatted}</span>;
}
