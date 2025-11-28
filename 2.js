function array() {
    const data = [];

    function a(i) {
        return data[i];
    }

    a.push = function(value) {
        data.push(value);
    };

    a.pop = function() {
        return data.pop();
    };

    return a;
}