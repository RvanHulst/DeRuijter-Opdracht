const buttonStart = document.getElementById("buttonStart");
const startPage = document.getElementById("startPageContainer");
const trainerPage = document.getElementById("trainerPageContainer");

const people = [
    {name: 'Barack Obama', img: "img/people/person1.jpg"},
    {name: 'Donald Trump', img: "img/people/person2.jpg"},
    {name: 'Bill Cosby', img: "img/people/person3.jpg"},
    {name: 'Batman', img: "img/people/person4.jpg"}
]

buttonStart.onclick = function() {
    startPage.style.display = "none";
    trainerPage.style.display = "block";
    createTable();
}

function createTable() {
    for (let tableRow = 0; tableRow < people.length; tableRow++) {
        console.log(tableRow);
    }
}