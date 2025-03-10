let speciesCont = document.getElementsByClassName("speciesCont");
let activeSpecies;


function selectSpecies(e){
    deselectSpecies();
    activeSpecies = e.querySelector("a").innerHTML;
    deselectSpecies();
    e.style.backgroundColor = "#0d0";
}

function deselectSpecies(){
    for(let i = 0; i<speciesCont.length; i++){
        speciesCont[i].style.backgroundColor = "#0a0";
    }
}