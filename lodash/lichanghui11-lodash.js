var lichanghui11 = {
    chunk(array, size = 1) {
        var results = [];
        var res = [];
        for (var i = 0; i < array.length; i++) {
            res.push(array[i]);
            if (res.length === size) {
                results.push(res);
                res = [];
            }
        }
        if (res.length) results.push(res);
        return results;
    },

    compact(array) {
        var res = [];
        for (var item of array) {
            if (item !== false) {
                res.push(item);
            }
        }
        return res;
    },

    concat(array, ...arguments) {
        for (var i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                array.push(...arguments[i]);
            } else {
                array.push(arguments[i]);
            }
        }
        return array;
    },

    difference() {

    }
}
