// lager variabler og setter startverdier
let kontoPenger = 200;
// skriver startverdiene til skjermen
let pomFritt = 1;
let getRotteFellePenger = 2;



function startSteadyIncome() {
    if (kontoPenger >= 50) {
        kontoPenger -= 50;
        clearInterval(steadyIncomeInterval);
        steadyIncomeInterval = setInterval(() => {
            kontoPenger += getRotteFellePenger;
            økonomi();
        }, 3000);
        
    }
}
 





function kjøpPomFritt() {
    if (pomFritt <= 40) {
        pomFritt++
        kontoPenger--
        moakeIDisken
        skrivPengerikonto();
    }
}
function kjøpRotteFelle() {
    if (prisVafler >= 1) {
        prisVafler = prisVafler - 1;
        skrivVaffelpris();
        
    }
}

function skrivPengerikonto() {
    document.getElementById("pengeriKonto").textContent = kontopenger 
}
