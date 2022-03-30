const url = 'https://eoscqrfgrtownzyndhvx.nhost.run' 
const peli = new Freezeframe('.film', {trigger: false,});
let peliRunning = false;
let prize = 0x1F451;
let gold = 0x1F451;

const showPrize = () =>{
    console.log(prize, gold, prize == gold)
    const chest = document.querySelector(".chest")
    peli.stop();
    chest.innerHTML = `&#${prize};${chest.innerHTML}`
    peliRunning = false
}

document.querySelector(".crush").addEventListener("click", () => {
    if (!peliRunning) {
        if (prize === gold)
            document.querySelector(".chest").innerHTML = '  '
        peliRunning = true
        peli.start();
        setTimeout(showPrize, 850);
        fetch(`${url}/v1/functions/prize`, {
            credentials: 'include',
        }).then(res => res.text()
        ).then(text => prize = parseInt(text, 16)
        ).catch(_ => prize = 0x1F4A9)
    }
});
