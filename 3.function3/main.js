function alphabetSort(message) {
    // wirte your code here
    var len = message.length - 1;
    var arr = [];
    for (var i = 0; i <= len; i++) {
        arr[i] = message.charAt(i)
    }
    return arr.sort().join('');
}

var alphabetSort = alphabetSort('hello'); // should return 'ehllo'
console.log('alphabetSort:', alphabetSort);
