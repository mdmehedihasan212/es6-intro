const add = (nam1, nam2) => nam1 + nam2;
const total = add(12, 12);
console.log(total);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const addMultiply = multiply(12, 22, 33);
console.log(addMultiply);

const tenTime = num => num * 10;
const tenTotal = tenTime(5);
console.log(tenTotal);

const fiveTime = () => 'mehedi';
const time = fiveTime();
console.log(time);

const bigData = (x, y) => {
    const multiply = x * y;
    const minus = x - y;
    const sum = multiply + minus;
    return sum;
}
const totalCal = bigData(20, 21);
console.log(totalCal);