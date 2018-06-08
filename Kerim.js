//function affecting HTML
function changeFirstP(){
	document.getElementById("firstP").innerHTML = "DELETED HEHEHE";
}

//function popping up window
function alertHello(){
	window.alert("Hello!");
}

//variables
var myNum = 0;
function increment(){
	document.getElementById("numText").innerHTML = myNum;
	myNum = myNum + 1;
}

//using objects
var car1 = {
	make: "Honda",
	milage: "56000",
	color: "Black",
	year: "2010",
	fullStats: function(){
		return "Make: " + this.make + ", Year: " + this.year + ", Color: " this.color + ", Milage: " + this.milage;
	}
}

var car2 = {
	make: "Ford",
	milage: "66200",
	color: "Blue",
	year: "2008",
	fullStats: function(){
		return "Make: " + this.make + ", Year: " + this.year + ", Color: " this.color + ", Milage: " + this.milage;
	}
}

var car3 = {
	make: "Nissan",
	milage: "97200",
	color: "Red",
	year: "2006",
	fullStats: function(){
		return "Make: " + this.make + ", Year: " + this.year + ", Color: " this.color + ", Milage: " + this.milage;
	}
}

function pickCar(carNum){
	var chosenCar;
	if(carNum == 1)
		chosenCar = car1;
	else if(carNum == 2)
		chosenCar = car2;
	else if(carNum == 3)
		chosenCar = car3;
	document.GetElementById("carList").innerHTML = chosenCar;
}
