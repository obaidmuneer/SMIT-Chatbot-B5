console.log("Hello js");

let fname = "obaid"
let lname = "muneer"

// let fullname = fname + " " + lname
let fullname = `${fname} ${lname}`

let num1 = 12
let num2 = "12"

// console.log(num1 + num2);
// // console.log(num1 + (+num2));
// console.log(num2 + num1);

let fruits = ["mango", "apple"]
// console.log(fruits);
// console.log(Array.isArray(fruits));
// fruits[0] = "kiwi"
// fruits[6] = "cherry"
// // console.log(fruits.length);
// fruits.push("orange")
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);

// console.log("123");
// fruits.unshift("kiwi")
// console.log(fruits);

const veg = ["potato"]
veg.concat(fruits)
// console.log(fruits.concat(veg), "fruit");

const mergedArr = veg.concat(fruits)

// console.log(mergedArr);
// console.log(veg);
// const f = mergedArr.slice(0, 1)
// console.log(f, "f");
// const sp = mergedArr.splice(2, 1);
// console.log(mergedArr, "mergedArr");
// console.log(sp, "sp");

const name = "ahmed"
// const flag
if (name == "ahmed") {
    console.log("welcome " + name);
} else if (name == "amjad") {
    console.log("welcome " + name);
} else {
    console.log("not welcome");

}






