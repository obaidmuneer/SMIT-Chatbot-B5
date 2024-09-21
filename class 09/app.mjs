import axios from 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.7/esm/axios.js';

window.axios = axios

const container = document.querySelector(".container")
const word = document.querySelector(".word")

const baseUrl = "https://jsonplaceholder.typicode.com"

const logger = (data) => {
    console.log(data);
}

// const clickHandler = () => {
//     axios.get(baseUrl + "/todsssos/1")
//         .then((res) => {
//             logger(res.data)
//         }).catch((err) => {
//             console.log(err);
//         })
// }


const clickHandler = async () => {
    try {
        const value = word.value
        const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
        const data = res.data
        logger(data)
        container.innerHTML = data[0]?.meanings[0]?.definitions[0]?.definition || ""
        container.innerHTML += "<br>" + (data[0]?.meanings[0]?.antonyms[0] || "")
        const mp3Url = (data[0]?.phonetics[0]?.audio || "")
        const audioEle = `<audio controls>
  <source src="${mp3Url}" type="audio/mp3">
Your browser does not support the audio element.
</audio>`
        container.innerHTML += mp3Url ? "<br>" + audioEle : "Audio is not available"
    } catch (error) {
        console.error(error.message);
        alert(error.message)
    }
}

window.clickHandler = clickHandler