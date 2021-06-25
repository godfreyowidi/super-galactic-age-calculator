export default function Age(number) {
  this.age = age;
}

let ages = {
  mercury: .24,
  venus: .62,
  mars: 1.8,
  jupiter: 11.86
}

export function mercuryAge(number) {
    let age = ((number) / (ages.mercury));
    return ("You are " + age + " mercury years old")
}

export function venusAge(number) {
  let age = ((number) / (ages.venus));
  return ("You are " + age + " venus years old")
}