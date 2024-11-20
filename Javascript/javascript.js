"Use strict";

// window.alert("I function you");

// document.getElementById("hello").textContent = "helo";

// VARIABLE

// let age = 19;
// let price = 10.99;

// let firstName = "Mark"; <<++ This is String.
// let online = true; <<++ This is Boolean.
// let nom = 24; <<++ This is number

// let students = 20;

// students += 2;
// students -= 2;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;

// let results = (12 % 5) + 8 / 2;

// const = a variable that can't be change

// let pi = 3.14159;
// let radius;
// let circumtances;

/*
// Project Creation No.1: Value of Circle project

document.getElementById("butOfInput").onclick = function () {
  const radius = document.getElementById("inputted").value;
  let circle = 3.14159 * radius ** 2;

  document.getElementById("headered").textContent = circle;

  radius = Number(radius);
};
*/

/*

// Project Creation No.2: Increase and Decrease project


const text = document.getElementById("numbers");
const decrease = document.getElementById("buttonThre");
const reset = document.getElementById("buttonTwo");
const increase = document.getElementById("buttonOne");

let count = 0;

increase.onclick = function () {
  count++;
  text.textContent = count;
};
reset.onclick = function () {
  count = 0;
  text.textContent = count;
};
decrease.onclick = function () {
  count--;
  text.textContent = count;
};
*/

/*
Math = built in object that provides a collection of properties and methods

z= Math.random() => to provide random no. below 1 and decimal
z= Math.round() => convert decimal into whole no.
z= Math.floor() => same goes to round()
z= Math.ceil() => rounding the numbers 
z= Math.trunc() => same goes to ceil()
z= Math.pow()  => powering the no.(eg 2**2 = 4)
z= Math.sqrt() => to square root a number
z= Math.sqrt() => to square root a number 
z= sin(),log(),cos(),tan() => use to trigo a number or for SC
z= Math.abs() => use to convert the - into + no.
z= Math.max() => to use the highest or maxm no.
z= Math.min() => to use the lowest or minm no.
*/

/*
Project Creation No.3: Random number project

const pick = document.getElementById("headNumber");
const gett = document.getElementById("headNumb");
const roll = document.getElementById("numbeRoll");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

reset.onclick = function () {
  roll.onclick = function () {
    let rollin = Math.floor(Math.random() * 100) + 1;
    pick.textContent = rollin;

    stop.onclick = function () {
      gett.textContent = rollin;

      if (!pick === pick) {
        roll.onclick = function () {
          pick.textContent = 0;
        };
      } else {
        roll.onclick = function () {
          pick.textContent = 0;
        };
      }
    };
  };

  pick.textContent = 0;
};
*/

/* Project Creation No.4
const agePutter = document.getElementById("Ageputter");
const click = document.getElementById("clicker");
const lisTer = document.getElementById("headQual");
let age;

click.onclick = () => {
  age = agePutter.value;
  age = Number(age);

  if (age >= 17) {
    lisTer.textContent = "You are old";
  } else {
    lisTer.textContent = "too youngs";
  }
};
*/

const checks = document.getElementById("checkbox1");
const checkT = document.getElementById("checkbox2");
const checkTh = document.getElementById("checkbox3");
const ifButtonIs = document.getElementById("buton");
const ifHeadIs = document.getElementById("ifheadis");

checks.onchange = () => {
  if (checks.checked) {
    checkT.checked = false;
    checkTh.checked = false;
  }

  ifButtonIs.onclick = () => {
    ifHeadIs.textContent = "tea";
  };
};

checkT.onchange = () => {
  if (checkT.checked) {
    checks.checked = false;
    checkTh.checked = false;
  }

  ifButtonIs.onclick = () => {
    ifHeadIs.textContent = "tea";
  };
};

checkTh.onchange = () => {
  if (checkTh.checked) {
    checks.checked = false;
    checkT.checked = false;
  }

  ifButtonIs.onclick = () => {
    ifHeadIs.textContent = "tea";
  };
};
