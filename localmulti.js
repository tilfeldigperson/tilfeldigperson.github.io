
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
var maskinvalg =1;
var counter = 0
const maskinbildeliste = ["rock.png","scissors.png", "paper.png"] // liste med bilder for maskinvalg
console.log("player one pick")
window.addEventListener("keydown", (react) => {
    console.log(react)

    
    if(react.key == 1 || react.key == 2 || react.key == 3){
        console.log("player one ready")
        brukervalgEl,src = maskinbildeliste[react]
        var spilelr1valg = react
        counter+=1
        if(react.key == 1){
            spilelr1valg == 1
            console.log(spilelr1valg)
        }
        else if(react.key == 2){
            spilelr1valg == 2
            console.log(spilelr1valg)
        }
        else if(react.key == 3){
            spilelr1valg == 3
            console.log(spilelr1valg)
        }
    }
    console.log("player two pick")
    if (react.key == 8 || react.key == 9 || react.key == 0){
        console.log("player two ready")
        maskinvalg = react;
        counter+=1
    }
    if (counter == 2){
        if (spilelr1valg == 1){
            if (maskinvalg == 9){
                spillerpoeng+=1
                document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
                document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
                console.log(spillerpoeng)
            }
            else if(maskinvalg == 8){
                console.log("=")
            }
            else{
                maskinvalg+=1
                document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
                document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
                console.log(maskinvalg)
            }
        }
        else if(spilelr1valg == 2){
            if (maskinvalg == 0){
                spillerpoeng+=1
                document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
                document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
                console.log(spillerpoeng)
            }
            else if(maskinvalg == 9){
                console.log("=")
            }
            else{
                maskinpoeng+=1
                document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
                document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
                console.log(maskinpoeng)
            }
        }
        else if(spilelr1valg == 3){
            if(maskinvalg == 8){
                spillerpoeng+=1
                document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
                document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
                console.log(spillerpoeng)
            }
            else if(maskinvalg == 0){
                console.log("=")
            }
            else{
                maskinpoeng+=1
                document.getElementById("spilerpoengvis").innerHTML = spillerpoeng
                document.getElementById("maskinpoengvis").innerHTML = maskinpoeng
                console.log(maskinpoeng)
            }
        }
    }
   
});


function resetfunc(){
    window.location.reload()
}
