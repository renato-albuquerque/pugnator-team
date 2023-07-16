/* variables */








/* functions */

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