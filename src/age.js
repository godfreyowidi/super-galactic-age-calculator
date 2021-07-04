export default class Age {
constructor(age, lifeExpectancy) {
  this.age = age;
  this.lifeExpectancy = 100;
}

/*galacticAge(planet) {
  if (this.planet === "Mercury") {
  let age = ((number) / (0.24));
    return ("You are " + age + " mercury years old")
} else if (this.planet === "Venus") {
  let age = ((number) / (0.62));
    return ("You are " + age + " venus years old")
} else if (this.planet === "Mars") {
  let age = ((number) / (1.8));
    return ("You are " + age + " mars years old")
} else if (this.planet === "Jupiter") {
  let age = ((number) / (11.86));
    return ("You are " + age + " jupiter years old")
} else {
  return "Choose a valid planet!"
}*/


  mercuryAge(number) {
    let age = Math.round((number) / (0.24));
    return ("You are " + age + " mercury years old")
  }

  venusAge(number) {
    let age = Math.round((number) / (0.62));
    return ("You are " + age + " venus years old")
  }

  marsAge(number) {
    let age = Math.round((number) / (1.8));
    return ("You are " + age + " mars years old")
  }

  jupiterAge(number) {
    let age = Math.round((number) / (11.86));
  return ("You are " + age + " jupiter years old")
  }
}