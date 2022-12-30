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


async function function1(){
    console.log(`inside function1`);
    return 'function1'
}

async function function2(){
    console.log('inside function2');
    return 'function2'
}

console.log(`1`);
(async() =>{
    console.log(await function1())
    console.log(await function2())
})();

console.log(`2`);






