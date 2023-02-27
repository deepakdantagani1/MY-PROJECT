// /* eslint-disable no-constant-condition */
// /* eslint-disable no-unused-vars */

// async function function1(){
//     let message = 'lol';
//     console.log(`${message.repeat(100)}`);
// }

// async function function2(){
//     console.log('logging function2');
// }

// function function3(){
//     console.log(`logging function3`);
// }

// setTimeout(function1, 100000);
// function2();
// function3();


// new Promise((resolve, reject) => {
//     resolve('Yay!');
// }).then((resolvedValue) => {
//     console.log(resolvedValue);
// });
// console.log('lastLog')


// // const getBankDetails = () => {
// //     return new Promise((resolve, reject) => {
// //         resolve('received bank detials')
// //     });
// // };

// // const getBankDetails = new Promise((resolve, reject) => {
// //     resolve('Yay!');
// // });

// const getBankDetails = () => {
//     return new Promise((resolve, reject) => {
//         if (false) {
//             resolve('Sunglasses order processed.');
//             return 'lol';
//         } else {
//             reject('That item is sold out.');
//         }
//     });
// };

// getBankDetails().then((bankDetils)=>{
//     console.log(bankDetils);
// }).catch((errorMessage)=>{
//     console.log(errorMessage);
// });
// function main() {
//   return new Promise( resolve => {
//     console.log(3);
//     resolve(4);
//     console.log(5);
//   });
// }

// async function f(){
//     console.log(2);
//     let r = await main();
//     console.log(r);
//     console.log(7);
// }

// console.log(1);
// f();
// console.log(6);

// function main() {
//   console.log(3);
//   return 4;
// }

// async function f(){
//   console.log(2);
//   let r = await main();
//   console.log(r);
// }

// console.log(1);
// f();
// console.log(5);

// 1, 2,


// async function function1() {
//     console.log(`inside function1`);
//     setTimeout(()=>{
//         Promise.resolve('function1')
//     }, 2000);
// }

// function function1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`inside function1`);
//             resolve('function1');
//         }, 2000);
//     });
// }

// async function function2(data) {
//     console.log('inside function2');
//     return data;
// }
// async function function3() {
//     console.log('inside function3');
//     return 'function3'
// }

// console.log(`1`);
// (async () => {
//     console.log(await function1().then(data => function2(data).then()));
//     //console.log(await function1().then(data => function2(data)));

//     console.log(await function3())
// })();

// console.log(`2`);


// async function returnDataAfterSomeTime(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('data')
//         }, 2000)
//     })
// }


// const promiseFunction = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('inside setTimeOut');
//             resolve('data');
//         }, 2000);
//     });
// }

// // promiseFunction()
// //     .then(data => console.log(data))
// //     .catch(error => console.log(error));



// (async() => {
//     try {
//         console.log(await promiseFunction());
//     } catch (error) {
//         console.log(error);
//     }
// }) ();


function getData(callback){
    setTimeout(() =>{
        callback(null, 'data')
    }, 2000);
}

function printToConsole(error, data){
    if(error) console.log(error)
    else console.log(data);
}

getData(printToConsole);


