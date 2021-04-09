(() => {

	console.log("fired");

	const sigils = document.querySelector('#navList'),
		  banner = document.querySelector('#houseImages');	

	function animateBanner(event){

		//debugger;
		if (event.target.className.includes('sigilContainer')){
		let multiplier = event.target.dataset.offset,
			offsetWidth = 600;

		banner.style.right = `${multiplier * offsetWidth}px`;
		//debugger;
		}
	}

	//sigils.forEach(sigils => sigils.addEventListener('click', animateBanner));
	sigils.addEventListener("click", animateBanner);
})();