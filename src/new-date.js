const PersianMonth = [
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

const Persiandays = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

const getPersianDate = (date) => {
  let newDate = moment(date);
  let year = newDate.jYear();
  let month = PersianMonth[newDate.jMonth()];
  let dayN = newDate.jDate();
  let day = Persiandays[newDate.day()];
  return `${day}، ${dayN} ${month} ${year}`;
};

document.addEventListener("DOMContentLoaded", function () {
  const persianDate = getPersianDate(new Date());
  const dateElement = document.querySelectorAll("#sidebar-date");
  dateElement.forEach(item => {
    item.innerHTML = persianDate;
  })
});
