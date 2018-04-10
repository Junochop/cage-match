

const printToDom = (domString, divId )=>{
    document.getElementById("winner");

}






const compareChallengers = () => {
    const playerName1 = document.getElementById("p1").value;
    const playerName2 = document.getElementById("p2").value;
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
    console.log(data);
    //buildDomString(data);
    //addChallengerEventListeners();
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
    





