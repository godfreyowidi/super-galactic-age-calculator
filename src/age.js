export default class Age {
  constructor(age) {
    this.age = age;
  }

  mercuryAge(number) {
    let age = Math.round((number) / (0.24));
    return ("You are " + age + " mercury years old")
  }


  venusAge(number) {
    let age = Math.round((number) / (0.62));
    return ("You are " + age + " venus years old")
  }
  
}