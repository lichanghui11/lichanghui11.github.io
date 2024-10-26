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
    while (depth > 0) {
      for (let item of arr) {
        
      } 
    }
  }






  return {
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