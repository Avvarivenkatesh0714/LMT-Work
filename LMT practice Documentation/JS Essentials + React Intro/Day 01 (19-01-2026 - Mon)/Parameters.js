// // name and age are parameters
// function introduce(name, age) {
// return `My name is ${name} and I am ${age} years old.`;
// }
// // "John" and 30 are arguments
// console.log(introduce("John", 30));

//Parameter Handling

// function add(a, b){
//   console.log(a + b);
// }

// add(2, 3);
// add(2);
// add(2, 4, 3);

// Default Parameters

function msg(name = "Guest"){
  return `Hello, ${name}`;
}

msg("Sanju")
msg()