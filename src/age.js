export default class Age {
constructor(age, lifeExpectancy) {
  this.age = age;
  this.lifeExpectancy = 100;
}

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

lifeExpectancy(number) {
  
}