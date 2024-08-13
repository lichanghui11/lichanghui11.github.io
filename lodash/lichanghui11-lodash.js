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

    fill (array, value, start = 0, end = array.length) {
        for (let i = start; i < end; i++) {
            array[i] = value;
        }
    },

    drop (array, num = 1) {
        for (let i = 0; i < num; i++) {
            if (array) array.shift();
        } 
        return array;
    },

    findIndex (array, fn, fromIndex = 0) {
        for (let i = fromIndex; i < array.length; i++) {
            if (fn (array[i])) {
                return i;
            } else {
                return -1;
            }
        }
    }, 

    findLastIndex (array, fn, from = array.length - 1) {
        for (let i = from; i > -1; i--) {
            if (fn(array[i])) {
                return i;
            } else {
                return -1;
            }
        }
    },

    flatten (array) {
        let res = [];
        for (let item of array) {
            if (Array.isArray(item)) {
                for (let it of item) {
                    res.push(it);
                }
            } else {
                res.push(item);
            }
       }
        return res;
    },

    flattenDeep : function flattenDeep (array) {
        let res = [];
        for (let item of array) {
            if (Array.isArray(item)) {
                for (let it of flattenDeep(item)) {
                    res.push(it);
                }
            } else {
                res.push(item);
            }
        }
        return res;
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
    }, 


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

