let odstavec =document.getElementById("odstavec");
let button = document.getElementById("button");
let buttonUpgrade = document.getElementById("buttonUpgrade");
let odstavec1 =document.getElementById("odstavec1");
console.log(odstavec.innerText);
let score = 0;
let scorePerClick = 1;
let upgradeCost = 10;
let upgradeLevel = 0;

button.onclick = function(e){
score += scorePerClick;

odstavec.textContent = "Score: " + score;
}

buttonUpgrade.onclick = function(e){
    if(score >= upgradeCost){
        score -= upgradeCost;
        upgradeLevel ++;
        scorePerClick ++;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        odstavec.textContent = "Score: " + score;
        odstavec1.textContent = "Upgrade Cost: " + upgradeCost + " Level: " + upgradeLevel;
    }
}



odstavec.textContent = "Score: " + score;
odstavec1.textContent = "Upgrade Cost: " + upgradeCost + " Level: " + upgradeLevel;


