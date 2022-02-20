function add(num1, num2 = 0) {
    const total = num1 + num2;
    return total;
}
const sumTotal = add(10, 10);
console.log(sumTotal);



function addName(nam1, nam2) {
    const totalNam = nam1 + " " + nam2;
    return totalNam;
}
const fullName = addName('abdus sami')
console.log(fullName);
