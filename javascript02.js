const output1 = document.querySelector(".child1-sub-container1");
const output2 = document.querySelector(".child2-sub-container1");
const output3 = document.querySelector(".child3-sub-container1");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");

const url = "https://jsonplaceholder.typicode.com/todos/";

const retrieveData = (data) => {
  data.forEach((item) => {
    if (item.title.length < 42)
      output1.innerHTML += ` id : ${item.id}  ***  title : ${item.title} *** completed : ${item.completed}</br>`;
  });
};

button1.onclick = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      retrieveData(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
