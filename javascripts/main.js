

const printToDom = (domString, divId )=>{
    document.getElementById(divId).innerHTML = domString;

}

const buildDomString = (data1, data2) => {
    let domString = [];

        domString += `<div id="p1" class="playerdiv">`;
        domString += `<img class="hero-pic" src="${data1.gravatar_url}">`;
        domString += `<p class="hero-name">${data1.name}</p>`;
        domString += `<p class="hero-point">${data1.points.total}</p>`;
        //domString += `<img class="hero-point" src="${data1.badges}">`;
        domString += `</div>`;
        domString += `<div id="p2" class="playerdiv">`;
        domString += `<img class="hero-pic" src="${data2.gravatar_url}">`;
        domString += `<p class="hero-name">${data2.name}</p>`;
        domString += `<p class="hero-point">${data2.points.total}</p>`;
        //domString += `<img class="hero-point" src="${data2.badges}">`;
        domString += `</div>`;

    printToDom(domString, "winner");


    //getsecondPoints();

};

const showWinner= (data, data2) => {

  if (data.points.total > data2.points.total){

    let domString = [];

    domString += `<div id="p2" class="playerdiv">`;
    domString += `<p class="hero-name">${data.name}</p>`;
    domString += `<p class="hero-point">${data.points.total}</p>`;
    domString += `</div>`;

    printToDom(domString, "winnerdisplay");

    checkBadges(data);
  } else {

    let domString = [];

    domString += `<div id="p2" class="playerdiv">`;
    domString += `<p class="hero-name">${data2.name}</p>`;
    domString += `<p class="hero-point">${data2.points.total}</p>`;
    domString += `</div>`;

    printToDom(domString, "winnerdisplay");

    checkBadges(data2);


  }

};

 const checkBadges = (winner) => {
    const winnerwho = winner.badges;
    let domString = [];
    for(let i =0; i< winnerwho.length; i++){
      domString += `<div class="winnerbadge">`;
      domString += `<img class="col-md-6" src="${winnerwho[i].icon_url}">`;
      //domString += `<h4 class="col-md-6">${winnerwho[i].name}</h4>`;
      domString += `</div>`;
      printToDom(domString, "winnerbadge");
    }

 }


const pushButton = () => {
    const buttonSubmit = document.getElementById("submitB");

    buttonSubmit.addEventListener("click",  () => {
      const p1 = document.getElementById("p1").value;

      genericChallengerRequest(loadForSinglePoints, p1);

    });

}



function executeThisCodeIfXHRFails() {
    console.log("something broke");
}

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    const p2 = document.getElementById("p2").value;
    genericChallengerRequest2(executeThisCodeAfterFileLoaded2, p2);
    buildDomString(data);

}
function executeThisCodeAfterFileLoaded2() {
    const data2 = JSON.parse(this.responseText);
    buildDomString2(data2);
}


const genericChallengerRequest2 = (data, playerName) => {
    let myRequest2 = new XMLHttpRequest();
    myRequest2.addEventListener("load", jsonConvert);
    myRequest2.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest2.open("GET", `https://teamtreehouse.com/${playerName}.json`);
    myRequest2.send();

  function jsonConvert() {
    const data2 = JSON.parse(this.responseText);
    buildDomString(data, data2);
    showWinner(data, data2);
  }
};

function loadForSinglePoints() {
  let player2Name = document.getElementById('p2').value;
  const data = JSON.parse(this.responseText);
  genericChallengerRequest2(data, player2Name);
}

const genericChallengerRequest = (successFunction, playerName) => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", successFunction);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", `https://teamtreehouse.com/${playerName}.json`);
    myRequest.send();


};



const startApplication = () => {
    pushButton();
};


startApplication();






