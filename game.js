let penger = 200;
let antallRottefeller = 0;

function oppdaterPenger() {
    document.getElementById('penger').innerText = 'Du har: ' + penger + 'kr' + ' på kontoen';
}

function oppdaterRottefeller() {
    document.getElementById('rottefeller').innerText = 'Du har ' + antallRottefeller + ' Rottefelle';
    if (antallRottefeller >= 2){
        document.getElementById('rottefeller').innerText = 'Du har ' + antallRottefeller + ' Rottefeller';
    }
}

function kjopRotteFelle() {
    if (penger >= 100) {
        penger -= 100;
        antallRottefeller++;
        oppdaterPenger();
        oppdaterRottefeller();
        showRPopup();
        
        let nedtelling = 10;
        const rottefelleInterval = setInterval(function() {
            nedtelling--;
            if (nedtelling === 0) {
                penger += 20;

                oppdaterPenger();
                nedtelling = 10;

                // Melding når en rotte er fanget
                const melding = '1 Rotte kebab solgt for rottefelle #' + antallRottefeller;
                document.getElementById('rotteMelding').innerText = melding;

                // Fjern meldingen etter 3 sekunder
                setTimeout(() => {
                    document.getElementById('rotteMelding').innerText = '';
                }, 3000);
            } else {
                // Nullstill meldingen hvis det ikke er noen rottefanget
                document.getElementById('rotteMelding').innerText = '';
            }
            oppdaterRottefeller();

            // Optional: Stop interval after a certain condition
            // For example, stop after a certain number of repetitions
            // if (antallRottefeller >= 5) {
            //     clearInterval(rottefelleInterval);
            // }
        }, 1000); // 1 sekund

        // Optional: Uncomment the following line to stop the interval after a certain time
        // setTimeout(() => clearInterval(rottefelleInterval), 60000); // Stop after 60 seconds
    } else {
        alert('Du har ikke nok penger!');
    }
}





// Legg til en ny funksjon for å fange måker
function fangMakke() {
    // Sjekk om brukeren har nok penger
    if (penger >= 20) {
        penger -= 20;

        // Generer en tilfeldig sjanse (0-100)
        const randomSjanse = Math.floor(Math.random() * 100) + 1;

        // Hvis sjanse er mindre enn eller lik 20, brukeren har fanget en måke
        if (randomSjanse <= 25) {
            penger += 40; // Belønning for å fange måken
            showMPopup();
            const melding = 'Du fanget en måke og fikk 50kr!';
            document.getElementById('makkeMelding').innerText = melding;

            // Fjern meldingen etter 3 sekunder
            setTimeout(() => {
                document.getElementById('makkeMelding').innerText = '';
            }, 3000);
        } else {
            // Hvis sjanse er over 20, brukeren klarte ikke å fange en måke
            const melding = 'Du klarte ikke å fange en måke!';
            document.getElementById('makkeMelding').innerText = melding;

            // Fjern meldingen etter 3 sekunder
            setTimeout(() => {
                document.getElementById('makkeMelding').innerText = '';
            }, 3000);
        }

        oppdaterPenger();
    } else {
        alert('Du har ikke nok penger!');
    }
}





function kjopEkteKebab(){
    if (penger >= 1000){
        penger += 1050;
        oppdaterPenger()
    } else {
        alert('Du har ikke nok penger!');
    }
}









function scrollToNextSection() {
    let currentSection = document.querySelector('.section:not([style*="display: none;"])');
    let nextSection = currentSection.nextElementSibling;
  
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


function showPopup() {
    var popUp = document.getElementById('popUp');
    popUp.showModal();
    if(closePopup<= true)
    popUp.close();
 }

 function closePopup() {
    var popUp = document.getElementById('popUp');
    popUp.close();
 }







function showRPopup() {
    let popUp = document.getElementById('rPopUp');
    popUp.showModal();
    setTimeout(function() {
       popUp.close();
    }, 500); // Lukk popup etter 2000 millisekunder (2 sekunder)
}

function showMPopup() {
    let popUp = document.getElementById('mPopUp');
    popUp.showModal();
    setTimeout(function() {
       popUp.close();
    }, 500); // Lukk popup etter 2000 millisekunder (2 sekunder)
}

function showKaPopup() {
    let popUp = document.getElementById('kaPopUp');
    popUp.showModal();
    setTimeout(function() {
       popUp.close();
    }, 500); // Lukk popup etter 2000 millisekunder (2 sekunder)
}

function showKPopup() {
    let popUp = document.getElementById('kPopUp');
    popUp.showModal();
    setTimeout(function() {
       popUp.close();
    }, 500); // Lukk popup etter 2000 millisekunder (2 sekunder)
}


