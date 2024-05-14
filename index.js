const Values = {
    rock: 1,
    paper: 2,
    scissor: 3,
};

const rockP = document.getElementById("rock");
const paperP = document.getElementById("paper");
const scissorP = document.getElementById("scissor");

const body1 = document.querySelector(".body-section");
const body2 = document.querySelector(".body-section-2");
const body3 = document.querySelector(".body-section-3");

const rockFn = document.getElementById("rockP");
const paperFn = document.getElementById("paperP");
const scissorFn = document.getElementById("scissorP");

const urChoice = document.getElementById("your-choice").querySelector(".circleOpt2");
const urImg = document.getElementById("your-img");

const pcChoice = document.getElementById("pc-choice").querySelector(".circleOpt2");
const pcImg = document.getElementById("pc-img");

const urC1 = document.getElementById("your-choice").querySelector(".circle1");
const urC2 = document.getElementById("your-choice").querySelector(".circle2");
const urC3 = document.getElementById("your-choice").querySelector(".circle3");

const pcC1 = document.getElementById("pc-choice").querySelector(".circle1");
const pcC2 = document.getElementById("pc-choice").querySelector(".circle2");
const pcC3 = document.getElementById("pc-choice").querySelector(".circle3");

const playButton = document.getElementById('display').querySelector("button").querySelector("span");
const compScore = document.getElementById("computer-score").querySelector("input");
const yourScore = document.getElementById("your-score").querySelector("input");
let compScorecard
let yourScorecard 

rockP.addEventListener('click', () => {
    body1.style.visibility = "hidden";
    transitionPlay();
    setTimeout(() => {
        body2.style.visibility = "visible";
    }, 4200)
    const rockVal = Values.rock;
    const compVal = Math.floor((Math.random() * 3) + 1);   // genrating a random value between 1-3
    urChoice.classList.add("rockC");
    urImg.src = "/images/rock.png";
    let hand = compare(compVal);
    pcChoice.classList.add(hand);
    switch (hand) {
        case "rockC":
            pcImg.src = "/images/rock.png";
            break;
        case "paperC":
            pcImg.src = "/images/paper.png";
            break;
        default:
            pcImg.src = "/images/scissor.png";
            break;
    }
    if (rockVal === compVal) {
        document.getElementById("display-result").innerHTML = 'TIE UP';
        document.getElementById('against-who').innerHTML = "";
        playButton.innerHTML = "<b>R&nbspE&nbspP&nbspL&nbspA&nbspY</b>";
    } else if (compVal !== 2) {
        setTimeout(() => {
            urC1.style.visibility = "visible";
            urC2.style.visibility = "visible";
            urC3.style.visibility = "visible";
            document.getElementById("rules").style.animation = "slideInLeftR 2s ease forwards"
            document.getElementById("next").style.animation = "slideInLeftN 2s ease forwards"
            yourScore.value = JSON.parse(localStorage.getItem("your"));
        },4200)
        document.getElementById("display-result").innerHTML = 'YOU WON';
        document.getElementById('against-who').innerHTML = "AGAINST PC";
        yourScorecard += 1;
        localStorage.setItem("your", JSON.stringify(yourScorecard));
    } else {
        setTimeout(() => {
            pcC1.style.visibility = "visible";
            pcC2.style.visibility = "visible";
            pcC3.style.visibility = "visible";
            compScore.value = JSON.parse(localStorage.getItem("comp"));
        },4200)
        document.getElementById("display-result").innerHTML = 'YOU LOST';
        document.getElementById('against-who').innerHTML = "AGAINST PC";
        compScorecard += 1;
        localStorage.setItem("comp", JSON.stringify(compScorecard));
    }
})


paperP.addEventListener('click', () => {
    body1.style.visibility = "hidden";
    transitionPlay();
    setTimeout(() => {
        body2.style.visibility = "visible";
    }, 4200)
    const paperVal = Values.paper;
    const compVal = Math.floor((Math.random() * 3) + 1);   // genrating a random value between 1-3
    urChoice.classList.add("paperC");
    urImg.src = "/images/paper.png";
    let hand = compare(compVal);
    pcChoice.classList.add(hand);
    switch (hand) {
        case "rockC":
            pcImg.src = "/images/rock.png";
            break;
        case "paperC":
            pcImg.src = "/images/paper.png";
            break;
        default:
            pcImg.src = "/images/scissor.png";
            break;
    }
    if (paperVal === compVal) {
        document.getElementById("display-result").innerHTML = 'TIE UP';
        document.getElementById('against-who').innerHTML = "";
        playButton.innerHTML = "<b>R&nbspE&nbspP&nbspL&nbspA&nbspY</b>";
    } else if (compVal !== 3) {
        setTimeout(() => {
            urC1.style.visibility = "visible";
            urC2.style.visibility = "visible";
            urC3.style.visibility = "visible";
            document.getElementById("rules").style.animation = "slideInLeftR 2s ease forwards"
            document.getElementById("next").style.animation = "slideInLeftN 2s ease forwards"
            yourScore.value = JSON.parse(localStorage.getItem("your"));
        }, 4200)
        document.getElementById("display-result").innerHTML = 'YOU WON';
        document.getElementById('against-who').innerHTML = "AGAINST PC";
        yourScorecard += 1;
        localStorage.setItem("your", JSON.stringify(yourScorecard));
    } else {
        setTimeout(() => {
            pcC1.style.visibility = "visible";
            pcC2.style.visibility = "visible";
            pcC3.style.visibility = "visible";
            compScore.value = JSON.parse(localStorage.getItem("comp"));
        }, 4200)
        document.getElementById("display-result").innerHTML = 'YOU LOST';
        document.getElementById('against-who').innerHTML = "AGAINST PC";
        compScorecard += 1;
        localStorage.setItem("comp", JSON.stringify(compScorecard));
    }
})


scissorP.addEventListener('click', () => {
    body1.style.visibility = "hidden";
    transitionPlay();
    setTimeout(() => {
        body2.style.visibility = "visible";
    }, 4200)
    const scissorVal = Values.scissor;
    const compVal = Math.floor((Math.random() * 3) + 1);   // genrating a random value between 1-3
    urChoice.classList.add("scissorC");
    urImg.src = "/images/scissor.png";
    let hand = compare(compVal);
    pcChoice.classList.add(hand);
    switch (hand) {
        case "rockC":
            pcImg.src = "/images/rock.png";
            break;
        case "paperC":
            pcImg.src = "/images/paper.png";
            break;
        default:
            pcImg.src = "/images/scissor.png";
            break;
    }
    if (scissorVal === compVal) {
        document.getElementById("display-result").innerHTML = 'TIE UP';
        document.getElementById('against-who').innerHTML = "";
        playButton.innerHTML = "<b>R&nbspE&nbspP&nbspL&nbspA&nbspY</b>";
    } else if (compVal !== 1) {
        setTimeout(() => {
            urC1.style.visibility = "visible";
            urC2.style.visibility = "visible";
            urC3.style.visibility = "visible";
            document.getElementById("rules").style.animation = "slideInLeftR 2s ease forwards"
            document.getElementById("next").style.animation = "slideInLeftN 2s ease forwards"
            yourScore.value = JSON.parse(localStorage.getItem("your"));
        }, 4200)
        document.getElementById("display-result").innerHTML = 'YOU WON';
        document.getElementById('against-who').innerHTML = "AGAINST PC";
        yourScorecard += 1;
        localStorage.setItem("your", JSON.stringify(yourScorecard));
    } else {
        setTimeout(() => {
            pcC1.style.visibility = "visible";
            pcC2.style.visibility = "visible";
            pcC3.style.visibility = "visible";
            compScore.value = JSON.parse(localStorage.getItem("comp"));
        }, 4200)
        document.getElementById("display-result").innerHTML = 'YOU LOST';
        document.getElementById('against-who').innerHTML = "AGAINST PC";
        compScorecard += 1;
        localStorage.setItem("comp", JSON.stringify(compScorecard));
    }
})


document.getElementById("display").querySelector("button").addEventListener('click', () => {
    urChoice.classList.remove("rockC");
    urChoice.classList.remove("paperC");
    urChoice.classList.remove("scissorC");
    pcChoice.classList.remove("rockC");
    pcChoice.classList.remove("paperC");
    pcChoice.classList.remove("scissorC");
    pcC1.style.visibility = "hidden";
    pcC2.style.visibility = "hidden";
    pcC3.style.visibility = "hidden";
    urC1.style.visibility = "hidden";
    urC2.style.visibility = "hidden";
    urC3.style.visibility = "hidden";
    document.getElementById("rules").style.animation = "none"
    document.getElementById("next").style.animation = "none"
    rockFn.querySelector("p").style.animation = "none"
    paperFn.querySelector("p").style.animation = "none"
    scissorFn.querySelector("p").style.animatiom = "none"
    body2.style.visibility = "hidden";
    body3.style.visibility = "hidden"
    body1.style.visibility = "visible";
    playButton.innerHTML = "<b>P&nbspL&nbspA&nbspY&nbsp&nbspA&nbspG&nbspA&nbspI&nbspN</b>";
})

document.getElementById("close-rules").addEventListener('click', () => {
    document.querySelector(".rules-container").style.visibility = "hidden";
})

document.getElementById("rules").addEventListener('click', () => {
    document.querySelector(".rules-container").style.visibility = "visible";
})

document.getElementById("rules").addEventListener('click', () => {
    document.querySelector(".rules-container").style.visibility = "visible";
})


function compare(compVal) {
    if (compVal === 1) {
        return "rockC";
    } else if (compVal === 2) {
        return "paperC";
    } else {
        return "scissorC";
    }
}

function transitionPlay(){
    body3.style.visibility = "visible"
    rockFn.style.visibility = "hidden";
    scissorFn.style.visibility = "hidden";
    paperFn.style.visibility = "hidden";
    setTimeout(()=>{
        rockFn.style.visibility = "visible";
        rockFn.querySelector("p").style.animation = "growFn 0.7s linear";
        scissorFn.style.visibility = "hidden";
        paperFn.style.visibility = "hidden";
    },100) 
    setTimeout(()=>{
        rockFn.querySelector("p").style.animation = "shrinkFn 0.7s linear";
    },700)
    setTimeout(()=>{
        rockFn.style.visibility = "hidden";
        paperFn.style.visibility = "visible";
        paperFn.querySelector("p").style.animation = "growFn 0.7s linear";
    },1300) 
    setTimeout(()=>{
        paperFn.querySelector("p").style.animation = "shrinkFn 0.7s linear";
    },2000)
    setTimeout(()=>{
        paperFn.style.visibility = "hidden";
        scissorFn.style.visibility = "visible";
        scissorFn.querySelector("p").style.animation = "growFn 0.7s linear";
    },2700)
    setTimeout(()=>{
        scissorFn.querySelector("p").style.animation = "shrinkFn 0.7s linear";
    },3400)
    setTimeout(()=>{
        rockFn.style.visibility = "hidden";
        scissorFn.style.visibility = "hidden";
        paperFn.style.visibility = "hidden";
    },4100)
}

window.addEventListener("load", () => {
    document.querySelector('.rules-container').style.visibility = "visible";
    if(JSON.parse(localStorage.getItem("your")) === null || JSON.parse(localStorage.getItem("comp")) === null){
        localStorage.setItem("your", JSON.stringify(0));
        localStorage.setItem("comp",  JSON.stringify(0));
    }
    yourScore.value = localStorage.getItem("your");
    compScore.value = localStorage.getItem("comp");
    yourScorecard= Number(localStorage.getItem("your"));
    compScorecard= Number(localStorage.getItem("comp"));
  });
  
