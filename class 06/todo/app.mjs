const input = document.querySelector(".todo")
const container = document.querySelector(".container")

const submitHandler = () => {
    console.log("this is working");
    let value = input.value
    if (!input.value) {
        alert("value is empty")
        return
    }
    console.log(value);
    container.innerHTML += ` <p>${value}</p>`
    input.value = ""
}