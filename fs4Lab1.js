//1

class Car{
    constructor(model, year){
        this.model = model;
        this.year= year;
    }
    details(){ 
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car{
        constructor(model, year, balance){
            super(model, year);
            this.balance = balance;
        }
        info() {
        return `${this.model} has a balance of $${this.balance}.00`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
//Subclass - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

//2
const compareNumToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater than 10, success!`);
        } else {
            reject(`${num} is less than 10, error!`);}
    });
};

compareNumToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error))

//3
const arrayOfNames = ['jaxx', 'tiny', 'clay']
const mixedArray = ['anarchy', 99, true]

const makeUpperCase = (array) => {
    return new Promise((resolve,reject) => {
        if (array === 'string') {
        resolve(array.map(array => array.toUpperCase()))
        } else {
            reject('Error: Not all items in the array are strings!')
        }
    });
}

const sortWords = (array) => {
    return new Promise((resolve,reject) => {
        if (array === 'string') {
            resolve(array.sort())
        } else {
            reject('Error: Not all items in the array are strings!')
        }
    });
}

makeUpperCase(arrayOfNames)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeUpperCase(mixedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

//4

var promise1 = 101
var promise2 = "follow the white"
var promise3 = new Promise(function(resolve, reject) {
    resolve("rabbit.. neo");
});

Promise.all([promise1, promise2, promise3]).then(function(values){
    console.log(values);
});