const arr = [3, 6 , 8, 2];

function double(arg) {
    return arg * 2;
}

const firstOutput = arr.map(double);
console.log(firstOutput);

const secondOutput = arr.map(function(item) {
    return item * 2;
});
console.log(secondOutput);

const thirdOutput = arr.map((item) => item * 2);
console.log(thirdOutput);

const forthOutput = arr.map((item) => {
    return item * 2
});
console.log(forthOutput);