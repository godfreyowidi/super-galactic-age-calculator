export default function life(age, sex) {
  this.age = age;
  this.sex = sex;
}

export function lifeExpectancyBasedOnAge(age) {
    return (age / 2);
}