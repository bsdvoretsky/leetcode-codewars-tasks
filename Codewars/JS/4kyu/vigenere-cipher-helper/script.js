function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let encodedStr = "";
    
    for (let i = 0; i < str.length; i++) {
      if (abc.indexOf(str[i]) === -1) {
        encodedStr += str[i];
      } else {
        encodedStr += abc[(abc.indexOf(str[i]) + abc.indexOf(key[i % key.length])) % abc.length];
      }
    }
    
    return encodedStr;
  };
  this.decode = function (str) {
    let decodedStr = "";

    for (let i = 0; i < str.length; i++) {
      if (abc.indexOf(str[i]) === -1) {
        decodedStr += str[i];
      } else {
        decodedStr += abc[(abc.indexOf(str[i]) - abc.indexOf(key[i % key.length]) + abc.length) % abc.length];
      }
    }
    
    return decodedStr;
  };
}