/* JavaScript Programming ex 3
dates
Ishan Ganatra
*/

let registration = new Date(2020,0,7,8,25);
console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth}`);
console.log(`Day of the week: ${registration.getDay}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${now.getHours}`);
console.log(`Minutes: ${registration.getMinutes}`);
console.log(`second: ${registration.getSeconds()}`);

let now = new Date();
console.log(now);

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth}`);
console.log(`Day of the week: ${now.getDay}`);
console.log(`Date: ${now.getDate()}`);
console.log(`Hours: ${now.getHours}`);
console.log(`Minutes: ${now.getMinutes}`);
console.log(`second: ${now.getSeconds()}`);

now.setUTCFullYear(1999);
console.log(`${now.toDateString() ${now.}`);