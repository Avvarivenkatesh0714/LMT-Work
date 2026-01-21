
const myPromise = new Promise((resolve, reject)=>{
   setTimeout(function() {
       
       let success = false;
       
       if(success){
         resolve("Operation completed successfully!");
       }
       
       else{
         reject("Operation failed!");
       }
       
   }, 2000);
});

myPromise
.then(result => {
   console.log("Success:", result);
})
.catch((error)=>{
  console.log("Error: ", error);
})
.finally(()=>{
  console.log("Promise settled (fulfilled or rejected)");

});
