const radius = [4,6,2,7,9];

const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}

const calculate = (area) => {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(area(radius[i]));
    }
    return output;
}

console.log(calculate(area));
console.log(calculate(circumference));
console.log(calculate(diameter));