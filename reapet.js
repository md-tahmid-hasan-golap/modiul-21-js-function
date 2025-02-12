function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const rice = 5;
const fish = 80;
const bill = add(rice, fish);
console.log(bill)



// short cut return

function add2(price1, price2){
    return price1 + price2;
}
const totalBill = add2(100, 44);
console.log(totalBill)

function domath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;

}
const result = domath(10, 5);
console.log(result)

function isEven (number){
    if(number % 2 === 1){
        return true
    }
else{
    return false
}
}

const output = isEven(19);
console.log(output)

const outputs = isEven(20);
console.log(outputs)