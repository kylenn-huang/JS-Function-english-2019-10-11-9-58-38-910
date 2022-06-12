function countWords(message) {
    // wirte your code here
    var wordArr = message.split(" ")
    return wordArr.length

}

console.log("count:", countWords('Good morning, I love JavaScript.'));
