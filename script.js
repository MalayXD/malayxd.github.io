function translateCode(direction) {
    var inputCode = document.getElementById("codeInput").value;
    var translationDictForward = {
        'a': 'z', 'b': 't', 'c': 'e', 'd': 'c', 'e': 'd',
        'f': 'v', 'g': 'b', 'h': 'n', 'i': 'k', 'j': 'm',
        'k': 'i', 'l': 'o', 'm': 'u', 'n': 'y', 'o': 'l',
        'p': 'p', 'q': 'a', 'r': 'f', 's': 'x', 't': 'g',
        'u': 'j', 'v': 'r', 'w': 's', 'x': 'w', 'y': 'h',
        'z': 'q'
    };

    var translationDictReverse = {
        'z': 'a', 't': 'b', 'e': 'c', 'c': 'd', 'd': 'e',
        'v': 'f', 'b': 'g', 'n': 'h', 'k': 'i', 'm': 'j',
        'i': 'k', 'o': 'l', 'u': 'm', 'y': 'n', 'l': 'o',
        'p': 'p', 'a': 'q', 'f': 'r', 'x': 's', 'g': 't',
        'j': 'u', 'r': 'v', 's': 'w', 'w': 'x', 'h': 'y',
        'q': 'z'
    };

    var translationDict = (direction === 'forward') ? translationDictForward : translationDictReverse;

    var translatedCode = Array.from(inputCode).map(char => translationDict[char.toLowerCase()] || char).join('');
    document.getElementById("result").innerHTML = "Translated Code: " + translatedCode;
}
