module.exports = {
    // Wrapper
    showResults: function(n) {
        const result = this.play(n);
        result.forEach(r => console.log(r));
    },
    // Pure function
    play: function(n) {
        const fizzbuzzArray = [];
        for (let i = 1; i <= n; i++) {
            fizzbuzzArray.push(fizzbuzzRuleProcessing(i));
        }

        return fizzbuzzArray;
    }
};

// Pure function
function fizzbuzzRuleProcessing(number) {
    return number % 15 === 0 ? 'fizzbuzz' : number % 5 === 0 ? 'buzz' : number % 3 === 0 ? 'fizz' : number;
}