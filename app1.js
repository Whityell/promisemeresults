async function promiseChain() {
    try {
    let num1 = await slowMath.add(6, 2);
        console.log(num1);
    let num2 = await slowMath.multiply(num1, 2);
        console.log(num2);
    let num3 = await slowMath.divide(num2, 4);  
        console.log(num3);
    let num4 = await slowMath.subtract(num3, 3); 
        console.log(num4);
    let num5 = await slowMath.add(num4, 98);
        console.log(num5);
    let num6 = await slowMath.remainder(num5, 2);
        console.log(num6);
    let num7 = await slowMath.multiply(num6, 50); 
        console.log(num7);
    let num8 = await slowMath.remainder(num7, 40);
        console.log(num8);
    let num9 = await slowMath.add(num8, 32);  
        console.log(num9);
        console.log(`The result is ${num9}.`);
    } catch (e) {
        console.log(e);
    };
    };

    promiseChain();
