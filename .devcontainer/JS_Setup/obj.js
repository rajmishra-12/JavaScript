//singleton

//object literals
//object.create

const symb = Symbol("compound v")

const supes= {
    hero_name : "deep",
    [symb]: Symbol("v"),
    powers : "underwater",
    location : "us",
    age:25
}
// console.log(supes.hero_name)
// console.log(supes["location"])
// console.log(supes[symb])
// console.log( typeof supes[symb])
// supes.location = "Ghaziabad";
// console.log(supes["location"])
// Object.freeze(supes);
// supes.hero_name = "Starlight";
// console.log(supes);

// supes.slogan = function(){
//     console.log(`${this.hero_name} will save the america"`);
// }

// console.log(supes.slogan());

//Two types of creating objects

// const Tinder = new Object();
// console.log(Tinder);

// ****** Nested Objects *****
// const Bumble = {
//     email_Id : "rajrm121212@gmail.com",
//     User_Name : {
//         User_Full_Name : {
//             User_First_Name : "Raj",
//             User_Last_Name : "Mishra"
//         }
//     }
// }
// console.log(Bumble.User_Name.User_Full_Name.User_Last_Name);

// Assign opreator and spread operator

// const obj1 = {1:"a",2:"b"};
// const obj2 = {3:"a",2:"4"};
// const obj3 = {5:"a",2:"6"};
// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);

// const obj5 = {...obj1,...obj2,...obj3};
// console.log(obj5);


//*****Array of objects******
const arrayOfObjects = [
    {
        userId:12,
        userEmail:"nnmn@gmam"
    },
    {
        userId:13,
        userEmail:"nndfn@gmam"
    }
]
console.log(arrayOfObjects);





