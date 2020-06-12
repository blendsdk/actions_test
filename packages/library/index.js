function sayHello (name) {
    console.log(`Hello ${name}!`);
}

function sayTime() {
    console.log(`It is ${new Date()}`)
}

module.exports = {
    sayHello,
    sayTime
}