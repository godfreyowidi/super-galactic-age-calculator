export default function life(age, sex) {
  this.age = age;
  this.sex = sex;
}

export function lifeExpectancyBasedOnAge(age) {
    let ageNum = age / 2;
    return ageNum;
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

export function tabulate(ageNum, estimate) {
  let lifeExpectancy = ageNum + estimate;
  return lifeExpectancy;
}