const url = 'https://eoscqrfgrtownzyndhvx.nhost.run' 
const peli = new Freezeframe('.film', {trigger: false,});
let peliRunning = false;
let prize = 0x1F4A9;

const showPrize = () =>{
    const chest = document.querySelector(".chest")
    peli.stop();
    chest.innerHTML = `&#${prize};`
    chest.classList.add('visible')
    peliRunning = false
}

document.querySelector(".crush").addEventListener("click", () => {
    if (!peliRunning) {
        document.querySelector(".chest").classList.remove('visible')
        peliRunning = true
        peli.start();
        setTimeout(showPrize, 3000);
        fetch(`${url}/v1/functions/prize`)
            .then(data => data.text())
            .then(text => prize = parseInt(text, 16))
            .catch(_ => prize = 0x1F4A9)
    }
});
