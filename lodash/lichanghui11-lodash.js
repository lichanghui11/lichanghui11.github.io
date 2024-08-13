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
            if (item) {
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

    difference(array, values) {
        var res = [];
        for (var i = 0; i < array.length; i++) {
            for (var item2 of values) {
                if (array[i] === item2) {
                    array[i] = undefined;
                }
            }
        } 
        for (var item3 of array) {
            if (item3 !== undefined) {
                res.push(item3);
            }
        }
        return res;
    },

    differenceBy (array, args, fn) {
        var res = new MySet1(args.map(fn));
        
        return array.map(fn).filter(item => !res.has(item));
    }
}

class MySet1 {
    constructor (array) {
        this._set = [];
        for (var item of array) {
            if (!this._set.includes(item)) this._set.push(item);
        }
    }

    has (val) {
        for (var item of this._set) {
            if (item === val) return true;
        }
        return false;
    }
}

