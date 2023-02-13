/**** Section 1👉 Data Types in JavaScript ****/


// var myName = "sandeep kumar";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmThapas = false;
// console.log(iAmSandeep);

// // typeof operator 
// console.log(typeof(iAmSandeep));


// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); //bug
// "Java" + "Script"
// console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "sandeep" - "kumar"
// true + true
// true + false
// false + true
// false - true


// console.log("sandeep" - "kumar");


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: let names = ['sandeep', 'kumar', 'swati'];
Perform the following operations by using only one method:
1. add thangariyal at the end of the array (CREATE)
2. Tell the output of that method (READ)
3. update kumar to KUMAR. (UPDATE)
4. Delete swati from the array. (DELETE)
*/

// let names = ['sandeep', 'kumar', 'swati'];
// 1. const newNamee = names.splice(3,0,"thangariyal")
//console.log(names)
// OR
// const newNamee = names.splice(names.length,0,"thangariyal")
// console.log(names)

// 2. Splice() method return the deleted element or empty array;

// 3.  const newNames = names.splice(1,1,"KUMAR")
// console.log(names)

// 4. const newNames = names.splice(2,1)
// console.log(names);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Async/Await, Promises, Callbacks
*/

const datas = [
    {name: "Sandeep", Profession: "Software Engineer"},
    {name: "Ajay", Profession: "Software Engineer"}
];

function getDatas(){
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) =>{
            output += '<li>${data.name}</li>';
        })
        document.body.innerHTML = output;
    }, 1000);
};

// function createData(newdata, callback){
//     setTimeout(() => {
//         datas.push(newdata);
//         callback();
//     }, 2000)
// }
// createData({name: "Vivek", Profession: "Software Engineer"},getDatas());


// If we don't want callback() function, then we can use promise which is a better choice

// function createData(newdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newdata);
//             let error = false;
//             if(!error){
//                 resolve();
//             } else {
//                 reject("There is an error");
//             }
//             getDatas()}, 2000)
//     });
    
// }
// createData({name: "Vivek", Profession: "Software Engineer"}).then(getData).catch(err => console.log("Error"));


// Get Date in IST (Indian Standard Time)
let date = Math.floor(new Date().getTime() / 1000);
let time= new Date(date*1000).toString()
console.log(time)
