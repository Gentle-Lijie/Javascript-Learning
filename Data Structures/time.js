var time = new Date()

console.log(time); // current date and time

var specificTime = new Date(2022, 0, 1, 10, 30, 0); // January 1, 2022, 10:30:00
console.log(specificTime);

console.log(time.getFullYear()); // current year
console.log(time.getMonth());    // current month (0-11)
console.log(time.getDate());     // current day of the month (1-31)
console.log(time.getHours());    // current hour (0-23)
console.log(time.getMinutes());  // current minutes (0-59)
console.log(time.getSeconds());  // current seconds (0-59)

time.setFullYear(2023);
time.setMonth(11); // December
time.setDate(25);
time.setHours(15);
time.setMinutes(45);
time.setSeconds(30);

console.log(time); // updated date and time

var timestamp = time.getTime(); // milliseconds since January 1, 1970
console.log(timestamp);

var newDateFromTimestamp = new Date(timestamp);
console.log(newDateFromTimestamp); // date from timestamp

function getDeltaDate(time1, time2) {
    var deltaMilliseconds = Math.abs(time2.getTime() - time1.getTime());
    var deltaDays = Math.floor(deltaMilliseconds / (1000 * 60 * 60 * 24));
    var deltaHours = Math.floor(deltaMilliseconds / (1000 * 60 * 60) - deltaDays * 24);
    var deltaMinutes = Math.floor(deltaMilliseconds / (1000 * 60) - deltaDays * 24 * 60 - deltaHours * 60);
    var deltaSeconds = Math.floor(deltaMilliseconds / 1000 - deltaDays * 24 * 60 * 60 - deltaHours * 60 * 60 - deltaMinutes * 60);

    return {
        milliseconds: deltaMilliseconds,
        days: deltaDays,
        hours: deltaHours,
        minutes: deltaMinutes,
        seconds: deltaSeconds
    };
}

console.log(getDeltaDate(new Date(2022, 0, 1), new Date(2023, 0, 1))); // difference between two dates