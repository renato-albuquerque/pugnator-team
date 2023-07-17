/* variables */

const menuHamburger = document.querySelector(".fa-bars")
const mobileMenuBarsHide = document.querySelector(".mobileMenuBarsHide")
const mobileMenuBarsOpen = document.querySelector(".mobileMenuBarsOpen")

/* functions */

function openMenuHamburger() {
    mobileMenuBarsHide.classList.toggle("mobileMenuBarsOpen")

    if (mobileMenuBarsHide.classList.contains("mobileMenuBarsOpen")) {
        menuHamburger.classList.remove("fa-bars")
        menuHamburger.classList.add("fa-x")
    } else {
        menuHamburger.classList.add("fa-bars")
        menuHamburger.classList.remove("fa-x")
    }
}

function hideMenuHamburger() {
    mobileMenuBarsHide.classList.toggle("mobileMenuBarsOpen")
    menuHamburger.classList.remove("fa-x")
    menuHamburger.classList.add("fa-bars")
}

function share() {
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Webpage Escuderia PUGNATOR',
			text: 'F1 in Schools',
			url: 'https://pugnator-escuderia.vercel.app/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}