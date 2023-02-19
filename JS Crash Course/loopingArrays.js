const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`You deposited ${movement} at movement number: ${index + 1}`);
    } else {
        console.log(`You withdraw ${Math.abs(movement)} at movement number: ${index + 1}`);
    }
}


console.log("-------ForEach----------");
//                  1st param = value, 2nd param = index, 3rd = array
movements.forEach((movement, index, array) => {
    if (movement > 0) {
        console.log(`You deposited ${movement} at movement number: ${index + 1}`);
    } else {
        console.log(`You withdraw ${Math.abs(movement)} at movement number: ${index + 1}`);
    }
});

/*
The main differnce between foreach and for loop:
    1. foreach should iterate all the array values and 
    does not accept break and continue, while for loop accept
    break and continue
    2. 
*/