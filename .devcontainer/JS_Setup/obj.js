//singleton

//object literals
//object.create

const symb = Symbol("compound v")

const supes= {
    name : "deep",
    [symb]: Symbol("v"),
    powers : "underwater",
    location : "us",
    age:25
}
console.log(supes.name)
console.log(supes["location"])
console.log(supes[symb])
console.log( typeof supes[symb])