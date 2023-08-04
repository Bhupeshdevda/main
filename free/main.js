
let j = 2
// console.log(a);

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((item)=>item*item);
// console.log(squaredNumbers);

// if(a==="1"){
//     console.log("one is equal");
// }else{
//     console.log("some thing went wrong ");
// }

// for (let i = j; i <=10; i++) {
//     console.log(i);
// }


function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = null
        // Simulate a successful response
        resolve(data);
        // If there was an error, you can reject the Promise like this:
        reject(new Error('Failed to fetch data'));
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  // Using the Promise to get the data
  getData()
    .then((result) => {
      console.log('Data received:', result);
    })
    .catch((error) => {
      console.error('Error occurred:', error.message);
    });
  