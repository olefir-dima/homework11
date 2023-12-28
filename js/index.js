function filter(arr, callback, thisArg) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

function some(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function reduce(arr, callback, initialValue) {
  if (arr.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  let resArr;
  let i;
  if (initialValue === undefined) {
    resArr = arr[0];
    i = 1;
  } else {
    resArr = initialValue;
    i = 0;
  }

  while (i < arr.length) {
    resArr = callback(resArr, arr[i], i, arr);
    i++;
  }
  return resArr;
}

function runHW() {
  const arr = [1, 2, 3];

  document.getElementById("arr").innerHTML = "[ " + arr.join(", ") + " ]";

  document.getElementById("someMethod").innerHTML = arr.some((el) => el > 1);
  document.getElementById("someFunc").innerHTML = some(arr, (el) => el > 1);

  document.getElementById("filterMethod").innerHTML = arr.filter(
    (el) => el > 1
  );
  document.getElementById("filterFunc").innerHTML = filter(arr, (el) => el > 1);

  document.getElementById("reduceMethod").innerHTML = arr.reduce(
    (sum, el) => sum + el,
    0
  );
  document.getElementById("reduceFunc").innerHTML = reduce(
    arr,
    (sum, el) => sum + el,
    0
  );
}
