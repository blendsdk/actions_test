function sayHello (name) {
    console.log(`Hello ${name}!`);
}

function sayTime () {
    console.log(`It is ${new Date()} now`);
}

function addNumbers (a, b) {
    return a + b;
}

module.exports = {
    sayHello,
    sayTime,
    addNumbers
};