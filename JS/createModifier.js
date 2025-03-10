let modifierSection = document.getElementsByClassName("modifierSection");
let modifier = document.getElementsByClassName("modifier");
let stat = document.getElementsByClassName("statNumber");


function loadCreate() {
    statToModifier();
}

//Finds the current modifier
function getCurrentModifier() {
    for (let i = 0; i < modifierSection.length; i++) {
        if (modifierSection[i].style.display == "block") {
            curMod = i;
            return i;
            break;
        }
    }
}

//Hides every modifier
function closeModifiers() {
    for (let i = 0; i < modifierSection.length; i++) {
        modifierSection[i].style.display = "none";
    }
}

//Depending on the arrow, displays the previous or the next modifier
function nextModifier(a) {
    let curMod = getCurrentModifier();

    if (a === "+") {
        curMod = (curMod + 1) % modifierSection.length;
    } else if (a === "-") {
        curMod = (curMod - 1 + modifierSection.length) % modifierSection.length;
    }
    closeModifiers();
    loadModifier(curMod);
}

//Displays the nth modifier
function loadModifier(n) {
    modifierSection[n].style.display = "block";
}

//Match the modifier to the stat number
function statToModifier() {
    checkMod();
    
    for (let i = 0; i < modifierSection.length; i++) {
        let res = Math.floor((stat[i].value - 10) / 2);
        if (res > 0) {
            res = "+" + res;
        }
        modifier[i].innerHTML = res;
    }
}


//CHECKERS
//Includes all the checkers
function checkMod(){
    maxMinValueChecker();
    noZeroFormatChecker();
    onlyNumberContent();
}

//Checks that the value isn't above the maximum or below the minimum
function maxMinValueChecker() {
    curMod = stat[getCurrentModifier()];
    if (curMod.value < 0) {
        curMod.value = 0;
    }

    if (curMod.value > 20) {
        curMod.value = 20;
    }
}

//Checks that the content doesn'T start with 0 or there is no 00
function noZeroFormatChecker() {
    curMod = stat[getCurrentModifier()];
    if (curMod.value.startsWith("0") && curMod.value.length > 1) {
        curMod.value = curMod.value.slice(1);
    }
}

//Checks that only numbers are accepted, to avoid arrows or webkit
function onlyNumberContent(){
    curMod = stat[getCurrentModifier()];
    if(isNaN(curMod.value * 1)){
        curMod.value = curMod.value.slice(1);
    }
}



//WARNING
//Overwritting going back
/*window.addEventListener("popstate", function (event) {
    loseProgressWarning();
    history.pushState(null, "", window.location.href);
});


//Replacement function for going back
function loseProgressWarning() {
    console.log("LEAVE")
}*/