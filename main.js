// Write your JavaScript here
function handleClickEvent() {
    // conversion to cents to avoid floating point inaccuracy
    const price = Math.round(100 * document.getElementById("amount-due").value);
    console.log(`Amount due is ${price}`)
    const payment = Math.round(100 * document.getElementById("amount-received").value);
    // change variable is running total of cents owed as change is made high to low denomination
    let change = payment - price;
    console.log(change)
    let dollars;
    let quarters;
    let dimes;
    let nickels;
    let pennies;
    console.log(`Remaining change = ${change}, dollars = ${dollars}, quarters = ${quarters}, dimes = ${dimes}, nickels = ${nickels}, pennies = ${pennies}`)
    dollars = Math.floor(change / 100);
    document.getElementById("dollars-output").innerHTML = dollars;
    change = change % 100;
    console.log(`Remaining change = ${change}, dollars = ${dollars}, quarters = ${quarters}, dimes = ${dimes}, nickels = ${nickels}, pennies = ${pennies}`)
    quarters = Math.floor(change / 25);
    document.getElementById("quarters-output").innerHTML = quarters;
    change = change % 25;
    console.log(`Remaining change = ${change}, dollars = ${dollars}, quarters = ${quarters}, dimes = ${dimes}, nickels = ${nickels}, pennies = ${pennies}`)
    dimes = Math.floor(change / 10);
    document.getElementById("dimes-output").innerHTML = dimes;
    change = change % 10;
    console.log(`Remaining change = ${change}, dollars = ${dollars}, quarters = ${quarters}, dimes = ${dimes}, nickels = ${nickels}, pennies = ${pennies}`)
    nickels = Math.floor(change / 5);
    document.getElementById("nickels-output").innerHTML = nickels;
    change = change % 5;
    console.log(`Remaining change = ${change}, dollars = ${dollars}, quarters = ${quarters}, dimes = ${dimes}, nickels = ${nickels}, pennies = ${pennies}`)
    pennies = Math.floor(change);
    document.getElementById("pennies-output").innerHTML = pennies;
    console.log(`Remaining change = ${change}, dollars = ${dollars}, quarters = ${quarters}, dimes = ${dimes}, nickels = ${nickels}, pennies = ${pennies}`)
    
    //document.getElementById("output").innerHTML = `Correct change is ${dollars} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies.`;
} 
