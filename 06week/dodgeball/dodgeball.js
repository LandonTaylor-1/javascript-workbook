'use strict';

// let assert = require('assert');

// changing ids to make an easier call
const arrOfPeople = [
  {
    id: 0,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 1,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 2,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 3,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 4,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 5,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 6,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

class Person {
  constructor(person) {
    this.id = person.id;
    this.name = person.name;
    this.age = person.age;
    this.skillSet = person.skillSet;
    this.placeBorn = person.placeBorn;
    this.canThrowBall = false 
    this.canDodgeBall = false
    this.hasPaid = false
    this.isHealthy = false
    this.yearsExperience = false

    this.team = person.team;
    this.isPlayer = person.isPlayer;
  }
}

//creating a new instance of each person in the array
const people = arrOfPeople.map(person => new Person(person));
console.log(people)

// creating a function that lists the people
const listPeopleChoices = () => {
  // attaching to the DOM
  const listElement = document.getElementById('people')
  // does not allow multiple of the same list
  listElement.innerHTML = '';
  // filtering through people who are not already players
  // mapping through each person to make a new array of players
  people.filter(person => !person.isPlayer).map(person => {
    // create new list elements 
    const li = document.createElement("li")
    // create new button elements
    const button = document.createElement("button")
    // content inside the button
    button.innerHTML = "Make Player"
    // onclick function that moves from people to player array
    button.addEventListener('click', function() {makePlayer(person.id)} )
    // attaching button to list element
    li.appendChild(button)
    // attaching persons name & skill to the list element
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    // appending list element to the DOM
    listElement.append(li)
  })
}

// creating a function that lists the players
const listPlayerChoices = () => {
  // attaching to the DOM
  const listElement = document.getElementById('players')
  // does not allow multiple of the same list
  listElement.innerHTML = '';
  // filtering through players who are not already on a team
  // mapping through each person to make a new array of teams
  people.filter(person => person.isPlayer && !person.team).map(person => {
    // creating a new list element
    const li = document.createElement("li")
  
    // creating a new button element
    const buttonRed = document.createElement("button")
    // content inside the button
    buttonRed.innerHTML = "Make Red"
    // onclick function that moves players to red team
    buttonRed.addEventListener('click', function() {makeRed(person.id)} )
    // appends it to the list element
    li.appendChild(buttonRed)

    // creating a new button element
    const buttonBlue = document.createElement("button")
    // content inside the button
    buttonBlue.innerHTML = "Make Blue"
    // onclick function that moves players to the blue team
    buttonBlue.addEventListener('click', function() {makeBlue(person.id)} )
    // appends it to the DOM
    li.appendChild(buttonBlue)

    // attahcing persons name & skill to the list element
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    // appending the list element to the DOM
    listElement.append(li)
  })
}

const listRedChoices = () => {
  const listElement = document.getElementById('red')
  listElement.innerHTML = '';
  people.filter(person => person.isPlayer && person.team === 'red').map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet + ' - Team Color: Red - Team Mascot: Lobster'))
    listElement.append(li)
  })
}

const listBlueChoices = () => {
  const listElement = document.getElementById('blue')
  listElement.innerHTML = '';
  people.filter(person => person.isPlayer && person.team === 'blue').map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet + ' - Team Color: Blue - Team Mascot: Jay'))
    listElement.append(li)
  })
}

// called on a button click and the calls the listPeople function that will display the arrays
const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
  people.find(person => person.id === id).isPlayer = true;
  listPeople();
}

// called on a button click and the calls the listPeople function that will display the arrays
const makeRed = (id) => {
  console.log(`li ${id} was clicked!`)
  people.find(person => person.id === id).team = 'red';
  listPeople();
}

// called on a button click and the calls the listPeople function that will display the arrays
const makeBlue = (id) => {
  console.log(`li ${id} was clicked!`)
  people.find(person => person.id === id).team = 'blue';
  listPeople();
}

// called on a button click and the calls the listPeople function that will display the arrays
const makePerson = (id) => {
  console.log(`li ${id} was clicked!`)
  people.find(person => person.id === id).isPlayer = false;
  listPeople();
}

// master functions that calls all other functions that displays the arrays to the DOM
const listPeople = () => {
  listBlueChoices()
  listRedChoices()
  listPeopleChoices();
  listPlayerChoices();
}

if (typeof describe === 'function') {
  describe('makePlayer()', () => {
    it('should move to player array', () => {
      makePlayer(person[0]);
      assert.equal(person.isPlayer, true);
    });
    });
  };

  