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

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));