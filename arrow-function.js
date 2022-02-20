function add(num1, num2) {
    return num1 + num2;
}


const add2 = function add2(nam1, nam2) {
    return nam1 + nam2;
}

const add3 = function (ran1, ran2) {
    return ran1 + ran2;
}

// arrow function
const add4 = (sam1, sam2) => sam1 + sam2;

const total1 = add(10, 10);
const total2 = add2(10, 10);
const total3 = add3(10, 10);
const total4 = add4(10, 10);

console.log(total1, total2, total3, total4);