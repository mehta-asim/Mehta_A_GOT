(() => {

	console.log("fired");

	const sigils = document.querySelectorAll('.sigilContainer'),
		  banner = document.querySelector('#houseImages');	

	function animateBanner(event){
		let multiplier = this.dataset.offset,
			offset = 600;

	banner.style.right = `${multiplier * offset}px`;
		//debugger;
	}

	sigils.forEach(sigils => sigils.addEventListener('click', animateBanner));
})();