export default class Age {
constructor(age, sex) {
  this.age = age;
  this.sex = sex;
}

  mercuryAge(number) {
    let age = ((number) / (0.24));
    return ("You are " + age + " mercury years old")
  }

  venusAge(number) {
    let age = ((number) / (0.62));
    return ("You are " + age + " venus years old")
  }

  marsAge(number) {
    let age = ((number) / (1.8));
    return ("You are " + age + " mars years old")
  }

  jupiterAge(number) {
    let age = ((number) / (11.86));
    return ("You are " + age + " jupiter years old")
  }
}