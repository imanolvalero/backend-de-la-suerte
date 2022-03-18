const url = 'https://eoscqrfgrtownzyndhvx.nhost.run' 
const peli = new Freezeframe('.film', {trigger: false,});
let peliRunning = false;


const showPrize = () =>{
    const prize = document.querySelector(".prize")
    const defaultPrize = 0x1F4A9;
    peli.stop();
    peliRunning = false
    fetch(`${url}/v1/functions/prize`)
    .then(data => data.text())
    .then(text => prize.innerHTML = `&#${parseInt(text, 16)};`)
    .catch(_ => prize.innerHTML = `&#${defaultPrize};`)
    .finally(() => prize.classList.add('visible'))
}

document.querySelector(".crush").addEventListener("click", () => {
    if (!peliRunning) {
        document.querySelector(".prize").classList.remove('visible')
        peliRunning = true
        peli.start();
        setTimeout(showPrize, 3000);
    }
});
