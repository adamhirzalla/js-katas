const talkingCalendar = function (date) {
  const dateSplit = date.split("/");
  let dateFinal = "";
  switch (dateSplit[1]) {
    case "01":
      dateFinal += "January ";
      break;
    case "02":
      dateFinal += "Febuary ";
      break;
    case "03":
      dateFinal += "March ";
      break;
    case "04":
      dateFinal += "April ";
      break;
    case "05":
      dateFinal += "May ";
      break;
    case "06":
      dateFinal += "June ";
      break;
    case "07":
      dateFinal += "July ";
      break;
    case "08":
      dateFinal += "August ";
      break;
    case "09":
      dateFinal += "September ";
      break;
    case "10":
      dateFinal += "October ";
      break;
    case "11":
      dateFinal += "November ";
      break;
    case "12":
      dateFinal += "December ";
      break;
    default:
      dateFinal += "NaD ";
      break;
  }
  switch (dateSplit[2]) {
    case "01":
    case "31":
      dateFinal += dateSplit[2] === "01" ? "1st, " + dateSplit[0] : dateSplit[2] + "st, " + dateSplit[0];
      break;
    case "02":
      dateFinal += "2nd, " + dateSplit[0];
      break;
    case "03":
      dateFinal += "3rd, " + dateSplit[0];
      break;
    default:
      dateFinal += Number(dateSplit[2]) < 10 ? dateSplit[2].substring(1) + "th, " + dateSplit[0] : dateSplit[2] + "th, " + dateSplit[0];
      break;
  }
  return dateFinal;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987