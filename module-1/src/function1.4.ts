// learning function 
// normal function 
// arrow function

function add (num: number, num2: number){
    return num + num2
}

add(2,2)

const addArrow = (num: number, num2: number) =>{
    num+ num2;

}

addArrow(4,5)

// object ----> function ------> method

const poorrUser = {
    name: "kobirul",
    balance: 0,
    addBalance (balance:number): string {
        return `my balance ${this.balance + balance}` 
    }
}

const arr: number[] = [2,3,4,2];
const newArray:number[] = arr.map((ele:number):number=>ele*ele)