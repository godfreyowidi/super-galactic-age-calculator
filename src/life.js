export default function life(age, sex) {
  this.age = age;
  this.sex = sex;
}

export function lifeExpectancyBasedOnAge(age) {
    return (age / 2);
}

export function lifeExpectancyBasedOnSex(sex) {
  let estimate;
  if (sex === "male") {
    return estimate = 30;
  } else if (sex === "female") {
    return estimate = 40;
  } else {
    return "No Pun Intended!"
  }
}