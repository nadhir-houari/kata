function main() {
    var fizzbuzz = require('./fizzbuzz');
    const n = Number(process.argv.slice(2)[0]);
    if (!Number.isInteger(n)) {
        console.error("You should enter a valid number as follow : 'npm run fizzbuzz YOUR_INTEGER_NUMBER'");
        return null;
    }
    fizzbuzz.showResults(n)
}

main();