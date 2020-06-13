//	alert("include index_page.js");
console.log("include index_page.js");

/* 변수(variable) : 변수를 생성하고 초기화하고 사용한다 */
let x; // 변수를 생성
x = 5; // 변수를 초기화
let y = 2; // 변수를 생성하고 초기화
let z = x - 2;
x += x;
console.log(x, z);

/* 상수(constant) */
const c = "상수";
console.log(c + " 변수에 대입을 할 수 없다");
// c = "Error : Assignment to constant variable.";

/* 문자열(String) */
const nickname = "DkPoint";
console.log("닉네임은 " + nickname);

/* Number */
const numberIs = 5;
const isNotNumber = "5";

/* Float */
const floatIs = 99.9;

/* 논리 자료형(Boolean) : True == 1 or False == 0 */
const booleanIs = true;
// const booleanIs = false;
console.log("booleanIs " + booleanIs);

/* Camel case : 변수명을 소문자로 시작해서 */
// 변수명 중간에 스페이스가 필요하면 스페이스 대신에
// 다음 단어의 첫 글자를 대문자로 써주고 단어를 작성한다\
const exampleCamelCase = "exampleCamelCase : 변수명 작성법";
console.log(exampleCamelCase);

/* 배열(Array) [] 대괄호 squre bracket */
const monday = "Mon";
const tuesday = "Tue";
const wednesday = "Wed";
const thursday = "Thu";
const friday = "Fri";
const saturday = "Sat";
const sunday = "Sun";

const createArray = [ monday, tuesday, wednesday, thursday, friday, saturday,
		sunday ];

console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday);

console.log(createArray);

console.log("배열의 1번째 값 : createArray[0] = " + createArray[0]);
console.log("배열의 3번째 값 : createArray[2] = " + createArray[2]);

/* 객체(Object) {} 중괄호 brace */
const gregoryInfo = {
	name : "Gregory",
	age : 31,
	gender : "Male",
	isKind : false,
	movies : [ "Along the gods", "LOTR", "Oldboy" ],
	food : [ {
		name : "Kimchi",
		fatty : false
	}, {
		name : "Cheese burger",
		fatty : true
	} ]
}

console.log(gregoryInfo);

console.log("gregoryInfo.isKind = " + gregoryInfo.isKind);
gregoryInfo.isKind = true;
console.log("gregoryInfo.isKind = " + gregoryInfo.isKind);

console.log(console);

/* 함수(function) */
function sayHello() {
	console.log("Hello World");
}

sayHello();

// 인자(argument or parameter)
const argument = "인자";

function useArgument(argument) {
	console.log(argument + "는 argument 또는 parameter 라고 합니다.");
}

useArgument(argument);

function sayHelloVer2(name, age) {
	console.log(`Hello ${name} you are ${age} years old`);
}

sayHelloVer2("Gregory", 15);

// 리턴 함수
function sayHelloVerReturn(name, age) {
	return `Hello ${name} you are ${age} years old`;
}

const greeting = sayHelloVerReturn("Gregory", 15);

console.log(`리턴 버젼 : ${greeting}`);

// 객체와 함수
const calculator = {
	plus : function(a, b) {
		return a + b;
	}
}

const calculateResult = calculator.plus(5, 5);
console.log(`계산결과 : ${calculateResult}`);

/* JS DOM Functions(Java Script Document Object Module Functions) */
console.log(document);

const title = document.getElementById("title");
console.log(title);
title.innerHTML = "Change the text of the id = title";
title.style.color = "pink";

console.dir(document);

document.title = "Change the title of the page";

const titleById = document.querySelector("#title");

/* Events and Event handlers : input, change, load, before, closing, printing ... */
function handleResize() {
	console.log("I have been resized");
}

// handleResize 로 소괄호를 적지 않는 점을 주의 깊게 보자
// 웹 브라우저 윈도위의 크기가 조절될 때마다 함수가 호출된다
// handleResize()로 적을 경우에는 바로 호출되므로 소괄호를 빼고 적어준다
window.addEventListener("resize", handleResize);

function handleClick() {
	title.style.color = "red";
}

title.addEventListener("click", handleClick);

/* 조건문 */
// 조건문 구조
/*
 	if(condition){
 		block
 	} else{
 		block
 	}
*/
if(10 === 5){
	console.log("같다");
}else{
	console.log("같지 않다");
}

if("100" === 100){
	console.log("같다");
}else{
	console.log("같지 않다");
}

if ("100" === 100){
	console.log("첫번째는 같지 않다");
} else if ("100" === "100"){
	console.log("두번째는 같다");
} else {
	console.log("같지 않다")
}

if ( 20 > 5 && "Gregory" === "Hi"){
	console.log("yes");
}else{
	console.log("no");
}

if ( 20 > 5 || "Gregory" === "Hi"){
	console.log("yes");
}else{
	console.log("no");
}

// true && true = true;
// false && true = false;
// true && false = false;
// false && false = false;

//true || true = true;
//false || true = true;
//true || false = true;
//false || false = false;

const age = prompt("How old are you");

if(age > 19){
	console.log("you can drink")
}	else {
	console.log("you can not drink")
}

if(age >= 19 && age <= 21){
	console.log("you can drink but you should not")
} else if(age > 21){
	console.log("you can not drink")
} else {
	console.log("too young so you can not drink")
}

// 2-6 

