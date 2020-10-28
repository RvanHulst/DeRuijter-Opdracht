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

buttonStart.onclick = function() {
    startPage.style.display = "none";
    trainerPage.style.display = "block";
    createTable();
}

function createTable() {
    for (let index = 0; index < people.length; index++) {
        var row = trainerTable.insertRow(1);
        var cell1 = row.insertCell(0); 
        cell1.innerHTML = people[index].name;
        cell1.id = "name" + index; 
        document.getElementById('name'+index).addEventListener("click", function(){
            console.log(document.getElementById('name'+index).innerHTML)
        });
    }
}

//<th><img class="imagePerson" src="${people[index].img}"></th>