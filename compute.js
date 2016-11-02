function random(m) {
    return Math.floor(Math.random() * m + 1);
}

function random2(n, m) {
    return Math.floor(Math.random() * n + (m - n));
}

function max(a, b) {
    var max = a;
    if (b > max) {
        max = b;
        return max;
    } else {
        return max;
    }

}

function lastChar(arr) {
    return arr[arr.length - 1];

}

function squares(a, b) {
    var value1 = a * a;
    var value2 = b * b;
    return value1 + value2;

}

function leapYear(year) {
    var leap;
    var num = year;
    if ((num % 4 == 0) && (num % 100 != 0) && (num % 400 != 0)) {
        leap = "Yes";
        return leap;
    } else {
        leap = "No";
        return leap;
    }

}