let data = ["obaid", "umair"];
let editIndex = -1;
let isEdit = false

const container = document.querySelector(".container");
const todo = document.querySelector(".todo");

const deleteHandler = (index) => {
  console.log(index);
  data.splice(index, 1);
  renderData();
};

const editHandler = (index) => {
  console.log(index);
  todo.value = data[index];
  editIndex = index;
};

const renderData = () => {
  container.innerHTML = "";
  let i = 0;
  for (const element of data) {
    container.innerHTML += `<p>
    ${element} 
    <button onclick="deleteHandler(${i})">Delete</button>
    <button onclick="editHandler(${i})">Edit</button>
    </p>`;
    i = i + 1;
  }
};

const addHandler = () => {
  const value = todo.value;
  if (value === "") {
    alert("value is empty");
    return;
  }
  console.log(value);

  data.push(value);
  todo.value = "";
  console.log(data);
  renderData();
};

const submitHandler = () => {
  if (editIndex > -1) {
    console.log(editIndex, "editIndex");
    data[editIndex] = todo.value;
    console.log(data);
    editIndex = -1;
    todo.value = "";
    renderData();
    return;
  }
  addHandler();
};

renderData();
