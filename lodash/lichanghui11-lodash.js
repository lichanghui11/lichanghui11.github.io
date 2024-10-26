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
      for (let item of collection) {
        if (typeof item === 'object') {
          if (!item[predicate]) return false;
        } else {
          if (typeof item !== 'boolean') return false;
        }
      }
      return true;
    }
  }



  return {
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
  }
}()