function chunk (array, size = 1) {
    let results = [];
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(array[i]);
        if (res.length === size) {
            results.push(res); 
            res = [];
        }
    }
    if (res.length) results.push(res);
    return results;
}