function fibonacci(n) {
    let sum = 0;
    let current = 1, prev = 0;
    while ((current + prev) <= n) {
        let nextFibo = current + prev;
        if (nextFibo % 2 === 0) {
            sum += nextFibo;
        }
        prev = current;
        current = nextFibo;
    }
    return sum;
}

let result = fibonacci(4000000);
console.log(result);