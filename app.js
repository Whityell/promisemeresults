slowMath.add(6, 2)                         // 1. add together 6 & 2 = 8
 .then((num1) => {
    let num2 = slowMath.multiply(num1, 2);                  // 2. multiply 8 by 2 = 16
    return num2;
}).then((num2) => {
    console.log(num2);
    let num3 = slowMath.divide(num2, 4);                    // 3. divide 16 by 4 = 4
    return num3;
}).then((num3) => {
    console.log(num3);
    let num4 = slowMath.subtract(num3, 3);                   // 4. subtract 3 from 4 = 1
    return num4;
}).then((num4) => {
    console.log(num4);
    let num5 = slowMath.add(num4, 98);                      // 5. add 1 and 98 = 99
    return num5;
}).then((num5) => {
    console.log(num5);
    let num6 = slowMath.remainder(num5, 2);                 // 6. 99 / 2 = remainder 1
    return num6;
}).then((num6) => {
    console.log(num6);
    let num7 = slowMath.multiply(num6, 50);                 // 7. multiply 1 by 50 = 50
    return num7;
}).then((num7) => {
    console.log(num7);
    let num8 = slowMath.remainder(num7, 40);                // 8. 50 / 40 = remainder 10
    return num8;
}).then((num8) => {
    console.log(num8);
    let num9 = slowMath.add(num8, 32);                      // 9. add 10 and 32 = 42
    return num9;
}).then((num9) => {
    console.log(num9);
    console.log(`The result is ${num9}.`);
}).catch((err) => {
    console.log(err);
});