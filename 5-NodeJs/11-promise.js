/* eslint-disable no-unused-vars */
let promise1 = new Promise((resolve, reject) =>{
    console.log('1');
    resolve(`promice1`)
    console.log('2')
});

let promise2 = new Promise((resolve, reject)=>{
    console.log(`3`)
    resolve(`promice2`)
    console.log(`4`)
});


// promise1.then((result)=>{
//     console.log('5');
//     console.log(result);
//     console.log('6');
//     return promise2
// }).then((result)=>{
//     console.log(`7`)
//     console.log(result)
//     console.log('8')
// })





