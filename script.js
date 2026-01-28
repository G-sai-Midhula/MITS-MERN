//let arr=[1,2,3,4]
//let result =arr.map((i)=>(i*2))
//let result1=result.filter((i)=>(i%2===0))
//let total=result1.reduce((sum,i)=>(sum+i),0)
//console.log(total)
//const arr = [2, 4, 7, 9, 11, 15, 17, 20];

//function isPrime(n) {
//  if (n < 2) return false;
//  for (let i = 2; i <= n / 2; i++) {
  //  if (n % i === 0) return false;
  //}
  //return true;
//}

//arr.forEach(n => {
  //if (isPrime(n)) console.log(n);
//});
//const arr = [2, 4, 7, 9, 11, 15, 17, 20];
//
//function isPrime(num) {
 // if (num < 2) return false;

  //for (let i = 2; i < num; i++) {
    //if (num % i === 0) return false;
  //}

  //return true;
//}

//for (let i = 0; i < arr.length; i++) {
  //if (isPrime(arr[i])) {
    //console.log(arr[i]);
  //}
//}

//var add=(a,b,callback)=>{
  //var result=a+b;
  //callback(result);
//}
//add(10,20,(res)=>{console.log(res)})
// var main=(callback)=>{
//   console.log("iam main");
//   callback()
// }
// var demo=()=>{
//   console.log("demo");
// }
// main(demo)


// // var promise = new Promise((resolve,reject)=>{
// //   var success=true;
// //   if(success){
// //     resolve("promise resolved");
// //   }
// //   else{
// //     reject("promise rejected");
// //   }
// // })
// // promise.then((res)=>console.log(res))
// // .catch((err)=>console.log(err))


// const getData=()=>{
//   return fetch('https://jsonplaceholder.typicode.com/posts')

// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))
const getData=async()=>{
  try{
    var res=await fetch('https://jsonplaceholder.typicode.com/posts')
    var data=await res.json();
    console.log(data);
  }
  catch(err)
  {
    console.log(err);
  }
  getData();
}
 