/* variables */

const menuHamburger = document.querySelector(".fa-bars")
const mobileMenuBarsHide = document.querySelector(".mobileMenuBarsHide")
const mobileMenuBarsOpen = document.querySelector(".mobileMenuBarsOpen")

const menuLanguage = document.querySelector(".fa-flag-checkered")
const mobileMenuLanguageHide = document.querySelector(".mobileMenuLanguageHide")
const mobileMenuLanguageOpen = document.querySelector(".mobileMenuLanguageOpen")

/* functions */

/* menu hamburger */

function openMenuHamburger() {
    mobileMenuBarsHide.classList.toggle("mobileMenuBarsOpen")
    mobileMenuLanguageHide.classList.remove("mobileMenuLanguageOpen")
    menuLanguage.classList.remove("fa-x")
    menuLanguage.classList.add("fa-flag-checkered")
        
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

/* switch language */

function openMenuLanguage() {
    mobileMenuLanguageHide.classList.toggle("mobileMenuLanguageOpen")
    mobileMenuBarsHide.classList.remove("mobileMenuBarsOpen")
    menuHamburger.classList.remove("fa-x")
    menuHamburger.classList.add("fa-bars")

    if (mobileMenuLanguageHide.classList.contains("mobileMenuLanguageOpen")) {
        menuLanguage.classList.remove("fa-flag-checkered")
        menuLanguage.classList.add("fa-x")
    } else {
        menuLanguage.classList.add("fa-flag-checkered")
        menuLanguage.classList.remove("fa-x")
    }    
}

function hideMenuLanguage() {
    mobileMenuLanguageHide.classList.toggle("mobileMenuLanguageOpen")
    menuLanguage.classList.remove("fa-x")
    menuLanguage.classList.add("fa-flag-checkered")
}

/* share */

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