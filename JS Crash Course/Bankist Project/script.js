'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// Add bar in the page for each movement for each account
const displayMovements = function (movements) {
    // to remove the static content in the current balance
    // in the rows not related to the account
    containerMovements.innerHTML = '';
    movements.forEach((mov, i) => {
        const type = (mov > 0) ? "deposit" : "withdrawal";
        const mov_row = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
    </div>`;
        // beforeend --> display data in order, while
        // afterbegin --> display data in reverrse
        containerMovements.insertAdjacentHTML('beforeend', mov_row);
    });

};
displayMovements(account1.movements);

// create user names for all accounts
// const createUsernames = (() => {
//     const usernames = [];
//     accounts.forEach((account,i) => {
//         usernames[i] = account.owner.split(" ").map((x) => x.charAt(0)).join("").toLowerCase();
//     });
//     return usernames;
// });

const calcPrintBalance = ((movements) => {
    const balance = movements.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    labelBalance.textContent = `${balance} EUR`;
});
calcPrintBalance(account1.movements);


const createUsernames = ((accs) => {
    accs.forEach((acc) => {
        acc.username = acc.owner.toLowerCase().split(" ").map((x) => x[0]).join("");
    })
});
createUsernames(accounts);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


// We want to convert EUR to USD
// using Map function

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const dollars = movements.map(val => val * eurToUsd);
// console.log(dollars);
// // or
// const dollars2 = movements.map(function (mov) {
//     return mov * eurToUsd;
// });
// console.log(dollars2);

// const deposits = movements.filter((mov) => {
//     return mov > 0;
// });
// console.log(deposits);

// const depositFor = [];

// for (const mov of movements) {
//     if (mov > 0)
//         depositFor.push(mov);
// }

// const withdrawals = movements.filter((mov) => {
//     return mov < 0;
// });
// console.log(withdrawals);

// const withdrawalFor = [];

// for (const mov of movements) {
//     if (mov < 0)
//          withdrawalFor.push(mov);
// }

console.log(movements);
// --------- Reduce ----------
// curr --> current element in the array
// acc  --> accumulator 
//  i --> index
//  arr --> entire array
// reduce has 2 params 1ts (acc, cur, i, arr) 
// and the 2nd is the initial value 
// we use reducer to combine array values
// to a single value
const balance = movements.reduce((acc, cur, i, arr) => {
    console.log(`Iteration ${i} = ${acc}`);
    return acc + cur; // --> acc += cur
}, 0);
console.log(balance);

// // or by for loop
// var sum = 0;
// for (const i of movements) {
//     sum += i;
// }
// console.log(sum);
// // Find max value using reduce
// // notes 
// // acc point to the first element 
// // while mov point to the second element
// // seoncd param = movements[0] because it is the starting point
// // and acc point always to the starting point which is the 2nd param
// // so we compare acc with current
// const max = movements.reduce((acc, mov) => {
//     if (acc < mov) {
//         console.log("mov", mov);
//         return mov;
//     } else {
//         console.log("acc", acc);
//         return acc;
//     }
// }, movements[0]);

// console.log(max);


// Chaining method combine multiple methods to achieve a task 
// Instead of write 3 functions to get the answer
// 1st find the deposits value, 2nd convert to EUR, 3rd find total balance
// pipeline
const deposits = movements.filter(mov => mov > 0).map(mov => mov * 1.1).reduce((total, val) => { return total + val }, 0);
console.log(deposits);