User Input
January 21, 2020 => Save to date oject


const date = new Date(yearCode, month, dayCode)
save the initial user input in date object : Date{2020, January, 21}
Then we will manipulate the data ---> meaning we will take the Year and use the formuala to calculate the Year Code and update the object with the Year code, and same thing for the Month code
upated object Date(4, 05, 21)

1. take the input, let dayCode = ('#input').val()
2. const dateObject = new Date(dayCode, monthCode, yearCode)
3. conditionals to check for leap year 
if {

}
return leapyear 
3. let dayOftheWeek = monthCode + dayCode + YearCode (We have to calculate)


Business Logic
let monthCode; Get user input than translate that to our Code based on the monthCodeObj 
let dayCode = ('#input').val()
let yearCode = Get from formula based on user input


Note: Number for day of the week

   const dayCodeObj = {
    mon: 1,
    tues: 2
  }
function Date(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
}

const date = new Date(2021, 23, 6);

```
Date.prototype.enterDay = function(num1) {
  return this.day; 
}
```

Date.prototype.enterMonth = function(month) {
  return this.month = monthCodeObj(month)
}

Date.prototype.enterYear = function(num3) {
  
}
 
1. Number for every month
  If else statement for Leap Year with this condition
  For a Leap Year * January is 5 and February is 1 but that will be explained shortly.

  const monthCodeObj = {
    January: 6,
    February: 2,
    January Leap Year: 5,
    February Leap Year: 1,
    March: 2,
    April: 5,
    May: 0,
    June: 3,
    July: 5,
    August: 1,
    September: 4,
    October: 6,
    November: 2,
    December: 4
  }



2. Code for every year
  1. Take last 2 digits of any year
  2. Divide by 4 and ignore the remainder
  3. If no remainder its a Leap year and the January code is 5 and Febuary code is 1
  4. Then add that answer to the last 2 digits of the year
  5. Divide by 7 and the remainder is the code

  if else statement to determine if its a leap Year 

 (Math.floor((Last 2 digits of Year) / 4) = (last 2 digits of Year)) / 7 = Answer
 Answer - Math.floor(Answer) = Remainder = Day of week

3. Month Code (get from monthCodeObj) + Day (get from user Input) + Year Code (We have to calculate) = Answer / 7 remainder is day of week

monthCode + 


January 21 2020
1. Month Code: 5 Leap year
2. Year Code: 4
  1. 20
  2. 20 / 4 = 5
  3. Leap year = 5
  4. 5 + 20 = 25
  5. 25 / 7 = 3 remainder is 4
3. 5 + 21 + 4 = 30 / 7 = 4 remainder 2 = Tuesday

June 23, 2021
1. Month Code: 3
2. Year Code: 5
  1. 21
  2. 21 / 4 = 5
  3. Not a Leap Year
  4.  5 + 21 = 26
  5. 26 /  7 = 3 remainder is 5 
3. 3 + 23 + 5 = 31 / 7 = 4 remainder is 3 = Wednesday

function Date(month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;
}

const d = new Date(2018, 11, 24);


-------------------------------
