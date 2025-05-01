"use strict";
// learning function 
// normal function 
// arrow function
function add(num, num2) {
    return num + num2;
}
add(2, 2);
const addArrow = (num, num2) => {
    num + num2;
};
addArrow(4, 5);
// object ----> function ------> method
const poorrUser = {
    name: "kobirul",
    balance: 0,
    addBalance(balance) {
        return `my balance ${this.balance + balance}`;
    }
};
const arr = [2, 3, 4, 2];
const newArray = arr.map((ele) => ele * ele);
