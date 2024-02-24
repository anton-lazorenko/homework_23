let year = 1900;

while (year <= 2100) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + "Высокосный");
    } else {
        console.log(year + "Не высокосный");
    } 
    year++;
}