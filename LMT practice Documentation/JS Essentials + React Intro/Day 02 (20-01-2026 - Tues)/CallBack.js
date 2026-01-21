
// function fetchData(callback){
  
//   setTimeout(function() {
//     callback("hello!!");
//   }, 2000);
  
// };

// fetchData(data => console.log(data));


function fetchData(callback) {
   setTimeout(function() {
     const data = { id: 1, name: "John" };
     callback(data);
   }, 2000);
}

console.log("Start");

const call = function(data) {
 console.log("Data received:", data);
}

fetchData(call);

console.log("End");
