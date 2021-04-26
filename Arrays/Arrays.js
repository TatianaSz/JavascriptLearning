let divs;
for(let i=0; i<3; i++){
	divs = document.createElement("div");
	divs.innerHTML = i;
	document.body.appendChild(divs);
}
let arrayLike = document.getElementsByTagName("div")

//Array from Array-like object

const real1 = Array.from(arrayLike);
real1.forEach((element, index) =>{console.log("I am an Array element!" + " " + index)});

let real2 = [];
let j=0;
for(const el of arrayLike){
	real2.push(el);
}
real2.forEach((element, index) => console.log("I am also Array element! " + j++));

let real3 = [...arrayLike];
real3.forEach((element, index) => console.log("An array here too! " + index))

let real4 = Object.values(arrayLike);
real4.forEach((element, index) => console.log("Look! Array! " + index))

let real5 = Object.keys(arrayLike).map((key) => (arrayLike[key]))
real5.forEach((element, index) => console.log("Array again " + index))

let real6 = Array.prototype.slice.call(arrayLike);
real6.forEach((element, index) => console.log("You guessed, array :) " + index))

function realFunction() {
    var real7 = [];
    for (var i = 0; i < arrayLike.length; i++) {
        real7.push(arrayLike[i]);
	
    }
	real7.forEach((element, index) => console.log("Yay, array " + index));
}
realFunction(arrayLike);