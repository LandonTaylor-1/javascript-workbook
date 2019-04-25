let numbers = 1;
do {
  numbers += 1;
  console.log(numbers);
} while (numbers < 1000);

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

for (let birthDate in person) {
    let lastNum = birthDate[birthDate.length-1];
    if (lastNum % 2 !=0) {
        console.log(person.birthDate + ' is an odd #')
        break;
    }
};

let arrayOfPersons = {
    [
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    ]
    {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    }
    {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    }
}