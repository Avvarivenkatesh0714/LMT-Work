
let person1 = {
  id1 : 1,
  name : "venkatesh",
  role : "SDE"
}

let person2 = {
  ...person1,
  age : 22,
}

let objMerged = {...person1, ...person2}

console.log(objMerged)
// console.log(person.name)
// console.log(person.role)