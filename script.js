document.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("load", function () {
		document.body.classList.remove("no-transition");
	});
	
	const header = document.querySelector("header");

	const ON_AT = 60;
	const OFF_AT = 10;

	let isCompact = false;

	function handleScroll() {
		const y = window.scrollY;

		if (!isCompact && y > ON_AT) {
			isCompact = true;
			header.classList.add("compact");
		} else if (isCompact && y < OFF_AT) {
			isCompact = false;
			header.classList.remove("compact");
		}
	}

	window.addEventListener("scroll", handleScroll, { passive: true });
	handleScroll();
  
	var coll = document.getElementsByClassName("week");

	for (var i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function () {
		this.classList.toggle("active");

		var content = this.nextElementSibling;
		if (!content) return;

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
		});
	}

	if (coll.length > 0) {
		var last = coll[coll.length - 1];
		var lastContent = last.nextElementSibling;

		last.classList.add("active");
		if (lastContent) {
			lastContent.style.maxHeight = lastContent.scrollHeight + "px";
		}
	}
});