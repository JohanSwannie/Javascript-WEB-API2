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

let result1Performed = false;

button1.onclick = () => {
  if (!result1Performed) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        retrieveData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  result1Performed = true;
};

let result2Performed = false;

const performResult2 = () => {
  const urlTwo = "MusicGroups.json";
  fetch(urlTwo)
    .then((response) => response.json())
    .then((data) => {
      data.music.forEach((item) => {
        output2.innerHTML += `<p>${item.instrument} is a ${item.type} music instrument and it's popularity is ${item.popularity}</p>`;
      });
    });
  const urlOne = "SportGroups.json";
  let xmlHR = new XMLHttpRequest();
  xmlHR.open("GET", urlOne);
  xmlHR.responseType = "json";
  xmlHR.onload = () => {
    let data = xmlHR.response;
    data.sports.forEach((item) => {
      output2.innerHTML += `<p>${item.sportName} has ${item.members} members and has it's origin since the year ${item.sinceYear}</p>`;
    });
  };
  xmlHR.send();
  console.log(xmlHR);
  result2Performed = true;
};

button2.onclick = () => {
  if (!result2Performed) performResult2();
};

const githubURL =
  "https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc";

button3.addEventListener("click", getData);

function getData(e) {
  e.preventDefault();
  fetch(githubURL)
    .then((res) => res.json())
    .then((data) => mHTML(data.items));
}

function mHTML(val) {
  output3.innerHTML = "";
  for (let x = 1; x < val.length; x++) {
    let div = document.createElement("p");
    div.innerHTML = `${val[x].name} <a href="${val[x].url}" target="_blank">${val[x].description}</a>`;
    output3.appendChild(div);
  }
}
