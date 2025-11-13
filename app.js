console.log("funkar");


/*forEach*/

let numbers = [1, 2, 3];

numbers.forEach(number => {
    console.log(number);
})

/**map */

let dollar = [1, 2, 3];

let euros = dollar.map(value => value * 0.95);

console.log(euros);

/**reduce */

let moreNumbers = [1, 2, 3];

let sum = moreNumbers.reduce((total, current) => {
    return total + current
}, 0)

console.log(sum);

let concat = moreNumbers.reduce((total, current) => {
    return total + current
}, '')

console.log(concat);