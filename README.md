# _Weekday Calculator_

#### _Web application to give you the day of the week for any date inputted_

#### By _**Shoshana Newman**_
#### By _**Godfrey Owidi**_


## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _Git and Github_
* _Webpack_
* _eslint_
* _babbel_
* _Jest_

## Description

_This browser application takes user inputs and caluclates day of the week using an known algorithim_

## Setup/Installation Requirements

* _Navigate to: [Weekday Calculator](https://shonewman.github.io/weekday-calculator/index.html "Weekday Calculator")_
* _To clone and run this application you will need to have [Git](https://git-scm.com/"Git" "Git") installed on your system_
* _Then clone this repository [Repository](https://github.com/ShoNewman/weekday-calculator.git "Repository") to your computer using the following commands in your terminal:_
- Clone repository to your computer:
  - $ git clone https://github.com/ShoNewman/weekday-calculator.git
- Install all dependencies in packages.json
  - $ npm install
- Open live development server
  - $ npm run start

## Known Bugs

* _Entries above 31 are beyond the scope of this application_
* _Does not account for negative numbers inputted_
* _Does not account for special characters inputted_
* _Does not restrict year structure convention_

## License

_Copyright 2021 Shoshana Newman_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact Information

_Shoshana Newman [sho.newman@gmail.com](mailto:sho.newman@gmail.com)_
_Godfrey Owidi [godfreyowiidi@gmail.com](mailto:godfreyowiidi@gmail.com)_

---------------------------------------------------------------------------

Business Logic
let monthCode; Get user input than translate that to our Code based on the monthCodeObj 
let dayCode = ('#input').val()
let yearCode = Get from formula based on user input
 
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

Test Dates:
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

