//valg av alle emementer på siden
var steinEl = document.querySelector("#stein");
var saksEl = document.querySelector("#saks");
var papirEl = document.querySelector("#papir");
var spillerresultatEl = document.querySelector("#spillerresultatvis")
var maskinresultatEl = document.querySelector("#maskinresultatvis")
var maskinvalgbildeEl = document.querySelector("#maskinvisning")
var restartEl = document.querySelector("#restart")
var brukervalgEl = document.getElementById("brukervalg")

var spillerpoeng = 0;
var maskinpoeng = 0;
steinEl.addEventListener("click", steinreaksjon)
saksEl.addEventListener("click", saksreaksjon)
papirEl.addEventListener("click", papirreaksjon)
restartEl.addEventListener("click", resetfunc)
const maskinbildeliste = ["rock.png","scissors.png", "paper.png"] // liste med bilder for maskinvalg

function steinreaksjon(){ //funksjonen for reaksjon når du velger stein velger ett tilfeldig tall fra 0 til 2
    //maskinvalg
var maskinvalg = Math.floor(Math.random() * 3) //maskinen velger basert på ett tilfeldig tall
console.log("stein")
brukervalgEl.src = maskinbildeliste[0]
maskinvalgbildeEl.src = maskinbildeliste[maskinvalg] //bestemmer bildekilden
console.log(maskinvalg)
if (maskinvalg == 1){ //skjekker om du eller maskinen har vunnet.
    spillerpoeng +=1
}else if (maskinvalg == 0){
    console.log("=")
    } 
else {
    maskinpoeng +=1
}
vinner();
    document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
    document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
}
function saksreaksjon(){ //funksjonen for reaksjon når du velger saks
    //maskinvalg
var maskinvalg = Math.floor(Math.random() * 3)
console.log("saks")
brukervalgEl.src = maskinbildeliste[1]
maskinvalgbildeEl.src = maskinbildeliste[maskinvalg]
console.log(maskinvalg)
if (maskinvalg == 1){
    spillerpoeng +=1
} else if (maskinvalg == 2){
    console.log("=")
    } 
else {
    maskinpoeng +=1
}
vinner();
document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
};
function papirreaksjon(){ //funksjonen for reaksjon når du velger pappir velger ett tilfeldig tall fra 0 til 2
    //maskinvalg
var maskinvalg = Math.floor(Math.random() * 3)
console.log(maskinvalg)
console.log("papir")
brukervalgEl.src = maskinbildeliste[2] //endrer bildet til brukervalgbildet
maskinvalgbildeEl.src = maskinbildeliste[maskinvalg] //endrer bildet til maskinvalgbildet
if (maskinvalg == 0){
    spillerpoeng +=1
} else if (maskinvalg == 1){
console.log("=")
}
else {
    maskinpoeng +=1
}
vinner();

document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
};
function vinner(){ //funksjonen for reaksjon når en av partene vinner ved å skjekko eom en av partene har 5.
    console.log("vinnertelling")
if (maskinpoeng >= 5){
    
    maskinresultatEl.innerHTML = "Maskinen har vunnet: "
    console.log("Maskinen har vunnet")
    document.querySelector("#stein").removeEventListener("click", steinreaksjon)
    document.querySelector("#saks").removeEventListener("click", saksreaksjon)
    document.querySelector("#papir").removeEventListener("click", papirreaksjon)
    document.getElementById("restart").hidden = false;
} else if (spillerpoeng >= 5){
spillerresultatEl.innerHTML = "Gratulerer du har vunnet: "
console.log("Gratulerer du har vunnet")
document.querySelector("#stein").removeEventListener("click", steinreaksjon)
document.querySelector("#saks").removeEventListener("click", saksreaksjon)
document.querySelector("#papir").removeEventListener("click", papirreaksjon)
document.getElementById("restart").hidden = false;
}}
function resetfunc(){
    window.location.reload()
}
