function palindrome(message) {
    message += "";
    var len = message.length - 1;
    for (var i = 0; i < len; i++, len--) {
        if (message.charAt(i) !== message.charAt(len)) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('hello'));
console.log(palindrome('abcba'));
