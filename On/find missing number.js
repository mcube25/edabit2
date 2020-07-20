var n = arr.length + 1,
        sum = 0,
        expectedSum = n * (n + 1) / 2;

    for (var i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }

    return expectedSum - sum;
    //or
    function missingNum(arr) {
        var sum = arr.reduce((a, b) => a + b, 0);
        return 55 - sum;
      }