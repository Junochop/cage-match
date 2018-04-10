

const printToDom = (domString, divId )=>{
    document.getElementById(divId).innerHTML = domString;

}

const buildDomString = allpoints => {
    let domString = [];
    
        domString += `<div id="p1" class="playerdiv">`;
        domString += `<img class="hero-pic" src="${allpoints.gravatar_url}">`;
        domString += `<p class="hero-name">${allpoints.points.total}</p>`;
        domString += `</div>`;
    
    printToDom(domString, "winner");


    getsecondPoints();




};

const buildDomString2 = allpoints2 => {
    let domString = [];

    domString += `<div id="p2" class="playerdiv">`;
    domString += `<img class="hero-pic" src="${allpoints2.gravatar_url}"</p>`;
    domString += `<p class="hero-name">${allpoints2.points.total}</p>`;
    domString += `</div>`;

    printToDom(domString, "winner2");
    checkScores();
    
};

 const checkScores = () => {
    const winnerwho = document.getElementsByClassName("playerdiv");
    console.log("yo", winnerwho.name);

 }




const getsecondPoints = () => {
    const playerName2 = document.getElementById("p2").value;
    genericChallengerRequest2(executeThisCodeAfterFileLoaded2, playerName2);

}



const compareChallengers = () => {
    const playerName1 = document.getElementById("p1").value;
    genericChallengerRequest(executeThisCodeAfterFileLoaded, playerName1);
   
}




const pushButton = () => {
    const buttonSubmit = document.getElementById("submitB");
    buttonSubmit.addEventListener("click", compareChallengers);
    
}



function executeThisCodeIfXHRFails() {
    console.log("something broke");
}

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    buildDomString(data);
    
}
function executeThisCodeAfterFileLoaded2() {
    const data = JSON.parse(this.responseText);
    buildDomString2(data);
}
    

const genericChallengerRequest2 = (successFunction, playerName) => {
    let myRequest2 = new XMLHttpRequest();
    myRequest2.addEventListener("load", successFunction);
    myRequest2.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest2.open("GET", `https://teamtreehouse.com/${playerName}.json`);
    myRequest2.send();

};



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
    





