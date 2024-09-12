const container = document.querySelector(".container")
const data = ["obaid", "adnan", "talha", "meer", "muzamil", "furqan"]

const data2 = [
    { name: "obaid", },
    { name: "adnan", },
    { name: "talha", },
    { name: "meer", },
    { name: "muzamil", },
    { name: "furqan" }]

// for (const element of data) {
//     console.log(element);
//     container.innerHTML += `<p class="text-sm font-bold underline"> ${element} </p>`
// }

// data2.map((obj, i) => {
//     console.log(obj, i);
// })


const sum = (num, num2) => {
    const result = num + num2
    return result
}

console.log(sum(4, 5));


