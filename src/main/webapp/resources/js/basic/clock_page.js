console.log("include clock_page.js");

const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
	
	getTime();
	
}

init();