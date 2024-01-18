// Use Day.js.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999
var gradDate = dayjs('1996-06-16').format('MMM D[,] YYYY');
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2027 be?
var weekDay = dayjs('1/1/2027').format('dddd') ;
$("#2a").text(weekDay);

// TODO: 3. What is the difference in days between May 4, 2027 and today?
var today = dayjs();
var futureDate = dayjs('2027-05-04');
var daysDifference = futureDate.diff(today, 'day');
$("#3a").text(daysDifference);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var currentTime = dayjs().format('HH:mm:ss');
$("#4a").text(currentTime);

// TODO: 5. What is the current Unix timestamp?
var unix = dayjs().unix();
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixTimestamp = 1318781876;
var unixFormat = dayjs.unix(unixTimestamp).format('MMM D[,] YYYY HH:mm:ss');
$("#6a").text(unixFormat);

