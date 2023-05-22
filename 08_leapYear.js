var cheackleapYear = function (leapYear) {
  if (leapYear == undefined || isNaN(leapYear) || leapYear < 0) {
    console.log(`${leapYear}  : Invalid data`);
    console.log(``);

  } else {
    if (leapYear % 4 == 0 && leapYear % 100 !== 0) {
      console.log(`${leapYear}   : is a Leap Year.`);
      console.log(``);

    } else {
      if (leapYear % 400 == 0) {
        console.log(`${leapYear} : is a Leap Year .`);
        console.log(``);

      } else {
        console.log(`${leapYear} : Not a Leap Year.`);
        console.log(``);
      }
    }
  }
};
cheackleapYear(2020);
cheackleapYear(1999);
cheackleapYear(1600);
cheackleapYear(2022);
cheackleapYear(1945);
cheackleapYear(null);
cheackleapYear("Twenty Twenty");
cheackleapYear(undefined);
cheackleapYear(NaN);
cheackleapYear(1750);
