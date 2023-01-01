const title = document.querySelector("#title");

let num = 0;

title.innerText = "click: " + num;

function click_letter() {
	num ++
	title.innerText = "click: " + num
};

title.addEventListener("click", click_letter);

