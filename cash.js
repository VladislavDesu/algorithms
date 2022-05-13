const cashFunction = (fn) => {
    const cash = {};
    return (n) => {
        if (cash[n]) {
          return cash[n];
        } else {
            const result = fn(n);
            cash[n] = result;
            return result;
        }
    }
};

const factorial = n => {
    let result = 1;

    while (n !== 1) {
        result *= n;
        n -= 1;
    }

    return result;
};

const cashFactorial = cashFunction(factorial);

cashFactorial(5);