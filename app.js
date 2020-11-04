const buttonStart = document.getElementById("buttonStart");
const startPage = document.getElementById("startPageContainer");
const trainerPage = document.getElementById("trainerPageContainer");
const trainerTable = document.getElementById("trainerTable");

const people = [
    {name: 'Barack Obama', img: "img/people/person1.jpg"},
    {name: 'Donald Trump', img: "img/people/person2.jpg"},
    {name: 'Bill Cosby', img: "img/people/person3.jpg"},
    {name: 'Batman', img: "img/people/person4.jpg"}
]
const names = ['Barack Obama','Donald Trump','Bill Cosby','Batman'];
const photos = ["img/people/person1.jpg","img/people/person2.jpg","img/people/person3.jpg","img/people/person4.jpg"];
    
buttonStart.onclick = function() {
    startPage.style.display = "none";
    trainerPage.style.display = "block";
    createTable();
}
// shuffle
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function createTable() {
    shuffle(photos);
    shuffle(names);
    for (let index = 0; index < people.length; index++) {
        var row = trainerTable.insertRow(1);
        var cell1 = row.insertCell(0); 
        cell1.innerHTML = names[index];
        cell1.id = "name" + index; 
        cell1.addEventListener("click", function(){
            console.log(document.getElementById('name'+index).innerHTML);
        });
        var cell2 = row.insertCell(1);
        cell2.id = "img" + index; 
        cell2.addEventListener("click", function(){
            console.log(document.getElementById('img'+index).innerHTML);
        });
        var imageCell2 = document.createElement("img");
        imageCell2.src = photos[index];
        imageCell2.classList.add("imagePerson");
        document.getElementById('img'+index).appendChild(imageCell2); 

    }
}
// document.getElementById("myImg").src;
//<th><img class="imagePerson" src="${people[index].img}"></th>