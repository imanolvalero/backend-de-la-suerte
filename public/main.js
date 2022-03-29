const url = 'https://eoscqrfgrtownzyndhvx.nhost.run' 
const peli = new Freezeframe('.film', {trigger: false,});
let peliRunning = false;
let prize = 0x1F4A9;
let tries = 0;

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
        setTimeout(showPrize, 850);
        fetch(`${url}/v1/functions/prize`)
            .then(response => {
                tries = response.headers.get('times') || 0
                return response.text()
            })
            .then(text => prize = parseInt(text, 16))
            .catch(_ => prize = 0x1F4A9)
    }
});
