function caesarCipher(string, key) {
    let codedMessage = "";
    for (let i = 0; i < string.length; i++) {
        // If character isn't a letter, add to the coded message unaltered
        if (string[i].toUpperCase() == string[i].toLowerCase()) {
            codedMessage += string[i];
        // If character is a capital letter, add its capital cipher
        } else if(string[i] == string[i].toUpperCase()){
            codedMessage += String.fromCharCode((string.charCodeAt(i) + key - 65) % 26 + 65);
        // If character is a lowercase letter, add its lowercase cipher
        } else if ((string[i] == string[i].toLowerCase())) {
            codedMessage += String.fromCharCode((string.charCodeAt(i) + key - 97) % 26 + 97);
        } 
    }
    return codedMessage;
}

export { caesarCipher };