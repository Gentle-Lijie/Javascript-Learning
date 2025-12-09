var total = 0

switch (month) {
    case 12:
        total += 31;
    case 11:
        total += 30;
    case 10:
        total += 31;
    case 9:
        total += 30;
    case 8:
        total += 31;
    case 7:
        total += 31;
    case 6:
        total += 30;
    case 5:
        total += 31;
    case 4:
        total += 30;
    case 3:
        // Check for leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            total += 29;
        } else {
            total += 28;
        }
    case 2:
        total += 31;
    case 1:
        total += day;
        break;
    default:
        console.log("Invalid month");
        total = -1; // Indicate error
}