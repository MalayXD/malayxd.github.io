function translateText() {
    var sourceText = document.getElementById("sourceText").value;

    // Placeholder translation logic: Swap each letter with the next in the alphabet
    var translatedText = Array.from(sourceText).map(function (char) {
        if (/^[a-zA-Z]+$/.test(char)) {
            var offset = char.toLowerCase() === 'z' ? -25 : 1;
            var nextChar = String.fromCharCode(char.charCodeAt(0) + offset);
            return char === char.toUpperCase() ? nextChar.toUpperCase() : nextChar;
        }
        return char;
    }).join('');

    document.getElementById("translatedText").value = translatedText;
}
