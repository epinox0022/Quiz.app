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
// Self Creation No.1: Value of Circle project

document.getElementById("butOfInput").onclick = function () {
  const radius = document.getElementById("inputted").value;
  let circle = 3.14159 * radius ** 2;

  document.getElementById("headered").textContent = circle;

  radius = Number(radius);
};
*/

/*

// Creation Copied No.1: Increase and Decrease project


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
self Creation No.2: Random number project

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