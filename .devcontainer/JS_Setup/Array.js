//array
const myArr = [1,2,3,4,5];
const supes = ["Homelander","Starlight","Deep"];
// console.log(myArr);

//array methods

// myArr.push(7);
// supes.push("Stormfront");
// console.log(supes);
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(0);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// Difference b/w Slice and Splice
// const m1 = myArr.slice(1,4);
// console.log(m1);
// console.log(myArr);

// const m2 = myArr.splice(1,4);
// console.log(m2);
// console.log(myArr);

//concat
console.log(myArr.concat(supes));

//spread
console.log([...myArr,...supes]);

//flat
const boys = ["hughie","butcher","mm","frenchie",["A-train","Starlight",["fbi","madam"]]];
const fighters = boys.flat(Infinity);
console.log(fighters);

//isarray , array.from  , array.of
console.log(Array.from("raj"));
console.log(Array.of("raj",3,7,8));











