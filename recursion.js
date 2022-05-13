const factorial = n => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};

console.log(factorial(5));

const fubonachi = n => {
    if (n <= 1) return n;
    return fubonachi(n - 1) + fubonachi(n - 2);
};

console.log(fubonachi(9));
