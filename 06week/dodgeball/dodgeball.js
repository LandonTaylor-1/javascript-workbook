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
      placeBorn: "Perth, Australia",
      isPlayer: true,
      team: 'red'
    },
    {
      id: 5,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California",
      isPlayer: true,
      team: 'blue'
    },
    {
      id: 6,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana",
      isPlayer: true
    },
  ]
  
  // const listOfPlayers = []
  // const blueTeam = []
  // const redTeam = []




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

  const people = arrOfPeople.map(person => new Person(person));


  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    listElement.innerHTML = '';
    people.filter(person => !person.isPlayer).map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  const listPlayerChoices = () => {
    const listElement = document.getElementById('players')
    listElement.innerHTML = '';
    people.filter(person => person.isPlayer && !person.team).map(person => {
      const li = document.createElement("li")

      const buttonRed = document.createElement("button")
      buttonRed.innerHTML = "Make Red"
      buttonRed.addEventListener('click', function() {makeRed(person.id)} )
      li.appendChild(buttonRed)

      const buttonBlue = document.createElement("button")
      buttonBlue.innerHTML = "Make Blue"
      buttonBlue.addEventListener('click', function() {makeBlue(person.id)} )
      li.appendChild(buttonBlue)

      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
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
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
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
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }

  
  // class player {
  //   constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
  //     this.canThrowBall = canThrowBall;
  //     this.canDodgeBall = canDodgeBall;
  //     this.hasPaid = hasPaid;
  //     this.isHealthy = isHealthy;
  //     this.yearsExperience = yearsExperience;
  //   }
  //   joinBlueTeam (player) {
  //     this.blueTeam = blueTeam
  //     player.blueTeam.push(this)
  //   }
  //   joinRedTeam (player) {
  //     this.redTeam = redTeam
  //     player.blueTeam.push(this)
  //   }
  // }

  // class blueTeammate {
  //   constructor(){}
  // }

  // class redTeammate {
  //   constructor(){}
  // }
  
  // const listPeopleChoices = () => {
  //   const listElement = document.getElementById('people')
  //   listElement.innerHTML = '';
  //   arrOfPeople.map(person => {
  //     const li = document.createElement("li")
  //     const button = document.createElement("button")
  //     button.innerHTML = "Make Player"
  //     button.addEventListener('click', function() {makePlayer(person.id)} )
  //     li.appendChild(button)
  //     li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
  //     listElement.append(li)
  //   })
  // }

  // const listPlayerChoices = () => {
  //   const listElement = document.getElementById('players')
  //   listElement.innerHTML = '';
  //   listOfPlayers.map(person => {
  //     const li = document.createElement("li")
  //     const buttonRed = document.createElement("button")
  //     buttonRed.innerHTML = "Make Red"
  //     buttonRed.addEventListener('click', function() {makePlayer(person.id)} )
  //     li.appendChild(buttonRed)
  //     li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
  //     listElement.append(li)
  //   })
  // }

  
  const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).isPlayer = true;
    listPeople();
  }

  const makeRed = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).team = 'red';
    listPeople();
  }

  const makeBlue = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).team = 'blue';
    listPeople();
  }

  const makePerson = (id) => {
    console.log(`li ${id} was clicked!`)
    people.find(person => person.id === id).isPlayer = false;
    listPeople();
  }

  const listPeople = () => {
    listBlueChoices()
    listRedChoices()
    listPeopleChoices();
    listPlayerChoices();
  }

  listPeople();