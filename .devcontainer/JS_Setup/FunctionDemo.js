// function myfun(){
//     console.log("function is fun");
// }
// myfun()
// function addTwoNumber(num1 ,num2){
//     console.log(num1 + num2);
// }
// addTwoNumber(4,null);
// function addTwoNumbers(num1 ,num2){
//     let result = num1 + num2;
//     return result;
// }
// const resultFinal = addTwoNumbers(3,5);
// console.log(resultFinal);

// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }
// let DisplayMessage = loginUserMessage("raj");
// console.log(DisplayMessage);

let veggies = {
    veggies_Name  : "Potato",
    veggies_Price : 2000
}

function Print_Veggies(anyObject){
    console.log(`veggie name is ${anyObject.veggies_Name} and its price is ${anyObject.veggies_Price}`);
    
}
Print_Veggies(veggies);