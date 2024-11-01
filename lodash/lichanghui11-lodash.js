/*
  以下为书写建议： 
  function chunc1(){
  

  }
  return {
    chunc: chunc1, 
  }
*/

var lichanghui11 = function () {
  function compact(arr) {
    let res = [];
    for (let item of arr) {
      if (item) res.push(item);
    }
    return res;
  }

  function chunk(arr, size = 1) {
    let res = [];
    let k = 0;
    let i = 0
    while (i < arr.length) {
      let temp = size;
      while (temp > 0) {
        if (!res[k]) {
          if (i > arr.length - 1) break;
          else res[k] = [arr[i]];
        } else {
          if (i > arr.length - 1) break;
          else res[k].push(arr[i]);
        }
        temp--;
        i++;
      }
      k++;
    }
    return res;
  }

  function fill(arr, val, start = 0, end = arr.length) {
    for (let i = start; i < end; i++) {
      arr[i] = val;
    }
    return arr;
  }

  function drop(arr, n = 1) {
    let res = [];
    for (let i = n; i < arr.length; i++) {
      res.push(arr[i]);
    }
    return res;
  }

  function findIndex(arr, func, fromIndex = 0) {
    if (typeof func === 'function') {
      for (let i = fromIndex; i < arr.length; i++) {
        if (func(arr[i])) return i;
      }
      return -1;
    } else if (Array.isArray(func)) {
      let key = func[0], val = func[1];
      for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i][key] === val) return i;
      }
      return -1;
    } else if (typeof func === 'object') {
      for (let i = fromIndex; i < arr.length; i++) {
        if (_isEqual(arr[i], func)) return i;
      }
      return -1;
    } else {
      for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i][func]) return i;
      }
      return -1;
    }
  }
  function _isEqual(obj1, obj2) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    for (let key in obj2) {
      if (obj2[key] !== obj1[key]) return false;
    }
    return true;
  }


  function findLastIndex(arr, predicate, fromIndex = arr.length - 1) {
    if (typeof predicate === 'function') {
      for (let i = fromIndex; i > -1; i--) {
        if (predicate(arr[i])) return i;
      }
      return -1;
    } else if (Array.isArray(predicate)) {
      let key = predicate[0], val = predicate[1];
      for (let i = fromIndex; i > -1; i--) {
        if (arr[i][key] === val) return i;
      }
      return -1;
    } else if (typeof predicate === 'object') {
      for (let i = fromIndex; i > -1; i--) {
        if (_isEqual(arr[i], predicate)) return i;
      }
      return -1;
    } else {
      for (let i = fromIndex; i > -1; i--) {
        if (arr[i][predicate]) return i;
      }
      return -1;
    }
  }

  function flatten(arr) {
    let res = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        res.push(...item);
      } else {
        res.push(item);
      }
    }
    return res;
  }

  function flattenDeep(arr) {
    let res = [];
    for (let item of arr) {
      if (Array.isArray(item)) {
        res.push(...flattenDeep(item));
      } else {
        res.push(item);
      }
    }
    return res;
  }

  function reduce(collection, iteratee, accumulator) {
    if (Array.isArray(collection)) {
      if (accumulator == undefined) initial = arr[0];
      else initial = accumulator;
      for (let i = 0; i < collection.length; i++) {
        initial = iteratee(initial, collection[i], i, collection);
      }
      return initial;
    } else {
      let initial = accumulator || {};
      for (let key in collection) {
        iteratee(initial, collection[key], key);
      }
      return initial;
    }
  }

  function concat(arr, ...values) {
    let res = [];
    for (let item of arr) {
      res.push(item);
    }
    for (let item of values) {
      if (Array.isArray(item)) {
        res.push(...item);
      } else {
        res.push(item);
      }
    }
    return res;
  }

  function flattenDepth(arr, depth = 1) {
    let res = [];
    function helper(arr, depth) {
      for (let item of arr) {
        if (typeof item === 'object' && depth > 0) {
          helper(item, depth - 1);
        } else {
          res.push(item);
        }
      }
    }
    helper(arr, depth);
    return res;
  }

  function fromPairs(pairs) {
    let dict = {};
    for (let item of pairs) {
      dict[item[0]] = item[1];
    }
    return dict;
  }

  function toPairs(object) {
    let res = [];
    let i = 0;
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        res[i] = [key];
        res[i].push(object[key]);
        i++;
      }
    }
    return res;
  }

  function head(arr) {
    if (!arr.length) return undefined;
    return arr[0];
  }

  function indexOf(arr, value, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++) {
      if (arr[i] === value) return i;
    }
    return -1;
  }

  function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i > -1; i--) {
      if (arr[i] === value) return i;
    }
    return -1;
  }

  function initial(arr) {
    return arr.slice(0, arr.length - 1);
  }

  function join(arr, separator = ',') {
    let res = '';
    separator = separator.toString();
    for (let item of arr) {
      res += item + separator;
    }
    return res.slice(0, res.length - 1);
  }

  function last(arr) {
    return arr[arr.length - 1];
  }

  function pull(arr, ...values) {
    for (let item of [...values]) {
      let i = arr.indexOf(item);
      while (i > -1) {
        arr.splice(i, 1);
        i = arr.indexOf(item);
      }
    }
    return arr;
  }

  function reverse(arr) {
    let mid = (arr.length >>> 1);
    let end = arr.length - 1;
    for (let i = 0; i < mid; i++) {
      [arr[i], arr[end]] = [arr[end], arr[i]];
      end--;
    }
    return arr;
  }

  function every(collection, predicate) {
    if (Array.isArray(predicate)) {
      let key = predicate[0], val = predicate[1];
      for (let item of collection) {
        if (item[key] !== val) return false;
      }
      return true;
    } else if (typeof predicate === 'object') {
      for (let item of collection) {
        if (!_isEqual(item, predicate)) return false;
      }
      return true;
    } else {
      if (typeof predicate === 'function') {
        for (let item of collection) {
          if (!predicate(item)) return false;
        }
      } else {
        for (let item of collection) {
          if (!item[predicate]) return false;
        }
      }
    }
    return true;
  }
  function some(collection, predicate) {
    if (Array.isArray(predicate)) {
      let key = predicate[0], val = predicate[1];
      for (let item of collection) {
        if (item[key] === val) return true;
      }
      return false;
    } else if (typeof predicate === 'object') {
      for (let item of collection) {
        if (_isEqual(item, predicate)) return true;
      }
      return false;
    } else {
      if (typeof predicate === 'function') {
        for (let item of collection) {
          if (predicate(item)) return true;
        }
        return false;
      } else {
        for (let item of collection) {
          if (item[predicate]) return true;
        }
        return false;
      }
    }
  }

  function countBy(collection, iteratee) {
    let dict = {};
    if (typeof iteratee === 'function') {
      for (let i = 0; i < collection.length; i++) {
        let key = iteratee(collection[i], i, collection);
        if (dict[key]) dict[key]++;
        else dict[key] = 1;
      }
    } else {
      for (let item of collection) {
        let key = item[iteratee];
        if (dict[key]) dict[key]++;
        else dict[key] = 1;
      }
    }
    return dict;
  }

  function groupBy(collection, iteratee) {
    let dict = {};
    if (typeof iteratee === 'function') {
      for (let i = 0; i < collection.length; i++) {
        let key = iteratee(collection[i], i, collection);
        if (dict[key]) dict[key].push(collection[i]);
        else dict[key] = [collection[i]];
      }
    } else {
      for (let item of collection) {
        let key = item[iteratee];
        if (dict[key]) dict[key].push(item);
        else dict[key] = [item];
      }
    }
    return dict;
  }

  function keyBy(collection, iteratee) {
    let res = {};
    if (typeof iteratee === 'function') {
      for (let item of collection) {
        let key = iteratee(item);
        res[key] = item;
      }
    } else {
      for (let item of collection) {
        let key = item[iteratee];
        res[key] = item;
      }
    }
    return res;
  }

  function forEach(collection, iteratee) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i);
      }
    } else {
      for (let key in collection) {
        iteratee(collection[key], key);
      }
    }
  }

  function map(collection, iteratee) {

    if (Array.isArray(collection)) {
      if (typeof iteratee === 'function') {
        var res = [];
        for (let i = 0; i < collection.length; i++) {
          let temp = iteratee(collection[i], i, collection);
          res.push(temp);
        }
      } else {
        var res = [];
        for (let item of collection) {
          res.push(item[iteratee]);
        }
      }
    } else {
      var res = [];
      for (let item in collection) {
        let temp = iteratee(collection[item]);
        res.push(temp);
      }
    }
    return res;
  }

  function _isParylyEqual(obj1, obj2) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }
  function filter(collection, predicate) {
    let res = [];
    for (let item of collection) {
      if (typeof predicate === 'function') {
        for (let it in item) {
          var user = it;
          break;
        }
        if (predicate(item)) {
          res.push(item[user]);
        }
      } else if (Array.isArray(predicate)) {
        for (let it in item) {
          var user = it;
          break;
        }
        let key = predicate[0], val = predicate[1];
        if (item[key] === val) res.push(item[user]);
      } else if (typeof predicate === 'object') {
        for (let it in item) {
          var user = it;
          break;
        }
        if (_isParylyEqual(predicate, item)) res.push(item[user]);
      } else {
        for (let it in item) {
          var user = it;
          break;
        }
        if (item[predicate]) res.push(item[user]);
      }
    }
    return res;
  }

  function reduceRight(collection, iteratee, accumulator = []) {
    let initial = accumulator;
    for (let i = collection.length - 1; i > -1; i--) {
      initial = iteratee(initial, collection[i]);
    }
    return initial;
  }
  function size(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'string') {
      return collection.length;
    } else {
      var i = 0;
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) i++;
      }
      return i;
    }
  }

  function sortBy(collection, iteratee) {
    let res = [];
    for (let i = 0; i < collection.length; i++) {
      if (typeof iteratee[0] === 'function') {
        let key = iteratee[0](collection[i]);
        val = collection[i]['age'];
        res[i] = [key, val];
      } else {
        let key = collection[i][iteratee[0]];
        let val = collection[i][iteratee[1]];
        res[i] = [key, val];
      }
    }
    return res;
  }

  function sample(collection) {
    let idx = (Math.random() * collection.length | 0);
    return collection[idx];
  }

  function isUndefined(value) {
    return value === undefined;
  }

  function isNull(value) {
    return value === null;
  }

  function max(arr) {
    if (!arr.length) return undefined;
    if (!Array.isArray(arr)) return undefined;
    let max = -Infinity;
    for (let item of arr) {
      if (item > max) max = item;
    }
    return max;
  }
  function min(arr) {
    if (!arr.length) return undefined;
    if (!Array.isArray(arr)) return undefined;
    let min = Infinity;
    for (let item of arr) {
      if (item < min) min = item;
    }
    return min;
  }
  function maxBy(arr, iteratee) {
    let max = -Infinity;
    let temp;
    let n = 'n';
    if (typeof iteratee === 'function') {
      for (let i = 0; i < arr.length; i++) {
        if (iteratee(arr[i]) > max) {
          max = iteratee(arr[i])
          temp = arr[i];
        }
      }
      return temp;
    } else {
      for (let item of arr) {
        if (item[iteratee] > max) {
          max = item[iteratee];
          temp = item;
        }
      }
      return temp;
    }
  }
  function minBy(arr, iteratee) {
    let min = Infinity;
    let temp;
    if (typeof iteratee === 'function') {
      for (let i = 0; i < arr.length; i++) {
        if (iteratee(arr[i]) < min) {
          min = iteratee(arr[i])
          temp = arr[i];
        }
      }
      return temp;
    } else {
      for (let item of arr) {
        if (item[iteratee] < min) {
          min = item[iteratee];
          temp = item;
        }
      }
      return temp;
    }
  }


  function sumBy(arr, iteratee) {
    let key = ''; 
    for (let item of arr) {
      key = Object.keys(item)[0];
      break;
    }
    let res = 0; 
    if (typeof iteratee === 'function') {
      for (let item of arr) {
        res += iteratee(item);  
      }
    } else {
      for (let item of arr) {
        res += item[iteratee];
      }
    }
    return res;
  }

  function round(number, precision = 0) {
    let factor = Math.pow(10, precision);
    let num = number * factor;
    num = Math.round(num);
    return num / factor;
  }

  function flatMap(collection, iteratee) {
    let res = []; 
    for (let i = 0; i < collection.length; i++) {
      res.push(...iteratee(collection[i], i, collection));
    }
    return res;
  }

  function flatMapDepth(collection, iteratee, depth = 1) {
    let res = collection.map(iteratee); 
    return _flatten(res, depth);
  }
  function _flatten(array, depth) {
    if (depth === 0) return array; 
    return array.reduce((initial, item) => {
      if (Array.isArray(item)) {
        initial.push(...flatten(item, depth - 1));
      } else {
        initial.push(item); 
      }
      return initial;
    }, [])
  }

  function get(object, path, defaultValue) {
    if (!Array.isArray(path)) var temp = path.split('')
  }
  return {
    get: get,``
    flatMapDepth: flatMapDepth,
    flatMap: flatMap,
    sumBy: sumBy,
    round: round,
    minBy: minBy,
    maxBy: maxBy,
    min: min,
    max: max,
    isNull: isNull,
    isUndefined: isUndefined,
    sample: sample,
    keyBy: keyBy,
    countBy: countBy,
    groupBy: groupBy,
    some: some,
    every: every,
    reverse: reverse,
    pull: pull,
    last: last,
    join: join,
    initial: initial,
    lastIndexOf: lastIndexOf,
    indexOf: indexOf,
    head: head,
    toPairs: toPairs,
    fromPairs: fromPairs,
    flattenDepth: flattenDepth,
    compact: compact,
    chunk: chunk,
    fill: fill,
    drop: drop,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    flatten: flatten,
    flattenDeep: flattenDeep,
    reduce: reduce,
    concat: concat,
    forEach: forEach,
    map: map,
    filter: filter,
    reduceRight: reduceRight,
    size: size,
    sortBy: sortBy,
  }

}()