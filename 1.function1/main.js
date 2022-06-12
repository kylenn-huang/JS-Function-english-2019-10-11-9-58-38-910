function reverseString(message) {
    var newMessager = "";
    for (var i = message.length - 1; i >= 0; i--) {
        newMessager += message.charAt(i);
    }
    return newMessager;
}

let reserverMessage = reverseString('hello'); // should return 'olleh'
console.log('reserverMessage: ', reserverMessage);
