// 1. Use a do...while loop to console.log the numbers from 1 to 1000.
let numbers = 1;
do {
  numbers += 1;
  console.log(numbers);
} while (numbers < 1000);

// 2. Create an object (an array with keys and values) called person with the following data:
let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

// 3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
for (let birthDate in person) {
    let lastNum = birthDate[birthDate.length-1];
    if (lastNum % 2 !=0) {
        console.log(person.birthDate + ' is an odd #')
        break;
    }
};

// 4. Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
let arrayOfPersons = [
  {
    firstName: "Autumn",
    lastName: "Taylor",
    birthDate: "Jun 17, 1988",
    gender: "female"
  },
  {
    firstName: "McKinley",
    lastName: "Taylor",
    birthDate: "May 3, 2016",
    gender: "female"},
  {
    firstName: "Kenyan",
    lastName: "Taylor",
    birthDate: "Apr 2, 2018",
    gender: "male"
  }
];

// 5. Use .map() to map over the arrayOfPersons and console.log() their information.
let info = arrayOfPersons.map(function(currentValue) {
  let infoDisplayed = [currentValue.firstName, currentValue.lastName, currentValue.birthDate, currentValue.gender];
  console.log(infoDisplayed);
});

// 6. Use .filter() to filter the persons array and console.log only males in the array.
let genderMale = arrayOfPersons.filter(function(currentValue) {
  let displayMale = currentValue.gender;
  if (displayMale == 'male') {
  console.log([currentValue.firstName, currentValue.lastName, currentValue.birthDate, currentValue.gender]);
  }
});

// 7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
let bornBefore = arrayOfPersons.filter(function(currentValue) {
  let displayBorn = currentValue.birthDate.substring(7, 11);
  if (displayBorn < 1990) {
  console.log([currentValue.firstName, currentValue.lastName, currentValue.birthDate, currentValue.gender]);
  }
});