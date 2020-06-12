function sayHello (name) {
    console.log(`Hello ${name}!`);
}

function sayTime() {
    console.log(`It is ${new Date()} now`)
}

module.exports = {
    sayHello,
    sayTime
}