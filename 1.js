function seq(fn) {
    const fns = [fn];

    function chain(arg) {
        if (typeof arg === 'function') {
            fns.push(arg);
            return chain;
        }

        if (typeof arg === 'number') {
            let result = arg;
            for (let f of fns) {
                result = f(result);
            }
            return result;
        }
    }

    return chain;
}