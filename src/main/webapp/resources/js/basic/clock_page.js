console.log("include clock_page.js");

const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
	const date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	// 10 보다 작으면 0을 추가하여 문자열을 출력
	hours < 10 ? hours = `0${hours}` : hours;
	minutes < 10 ? minutes = `0${minutes}` : minutes;
	seconds < 10 ? seconds = `0${seconds}` : seconds;
	
	clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
	
}

function init() {
	
	getTime();
	setInterval(getTime, 1000);
	
}

init();