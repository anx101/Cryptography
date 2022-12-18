const encoderesults = document.getElementById("encoded-message");
const dencoderesults = document.getElementById("decoded-message");
document.getElementById("encode-button").addEventListener(
    "click",
    function (e) {
        e.preventDefault();
        encode(); 
        },
    false
  );
  document.getElementById("decode-button").addEventListener(
    "click",
    function (e) { 
    e.preventDefault();
    decode(); 
    },
    false
  );
  //Encode function to encrypt the message
  const encode = () => {
    const secret = document.getElementById("original-message").value;
    const cover = document.getElementById("secret-message").value.split(" ");
    const key = document.getElementById("encodePw").value;
  
    const encrypt = rc4(key, secret);
    const hiddenMsg = txtZero(encrypt);
    const encoded = cover[0] + "﻿" + hiddenMsg + " " + cover.slice(1).join(" ");
  
    encoderesults.innerHTML = encoded;
    document.getElementById("encoded-message").value = encoded;
  };
  //Decode function to get the encrypted message
  const decode = () => {
    const cover = document.getElementById("decode-message").value; 
    const key = document.getElementById("decodePw").value; 
  
    const fword = cover.split(" ")[0];
    const hiddenMsg = fword.split("﻿").slice(1).join("﻿");
    const encrypt = zeroTxt(hiddenMsg);
    const decodedMessage = rc4(key, encrypt);
    dencoderesults.innerHTML = decodedMessage;
  };
  
  const rc4 = (key, str) => {
    var s = [], j = 0, x, res = "";
    for (var i = 0; i < 256; i++) {
      s[i] = i;
    }
    for (i = 0; i < 256; i++) {
      j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
      x = s[i];
      s[i] = s[j];
      s[j] = x;
    }
    i = 0;
    j = 0;
    for (var y = 0; y < str.length; y++) {
      i = (i + 1) % 256;
      j = (j + s[i]) % 256;
      x = s[i];
      s[i] = s[j];
      s[j] = x;
      res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
  };
  
  const pad = (num) => "00000000".slice(String(num).length) + num;
  const txt2Bin = (usr) =>usr.split("").map((char) => pad(char.charCodeAt(0).toString(2))).join(" ");
  const bin2Zero = (binary) =>binary.split("").map((binaryNum) => {
        const num = parseInt(binaryNum, 10);
        if (num === 1) {
          return "​";
        } else if (num === 0) {
          return "‌";
        }
        return "";
      }).join("﻿");
  
  const txtZero = (usr) => {
    const userBin = txt2Bin(usr);
    return bin2Zero(userBin);
  };
  
  const zeroBin = (string) => string.split("﻿").map((char) => {
        if (char === "​") {
          return "1";
        } else if (char === "‌") {
          return "0";
        }
        return " ";
      }).join("");
  
  const binToTxt = (string) =>string.split(" ").map((num) => String.fromCharCode(parseInt(num, 2))).join("");
  
  const zeroTxt = (usr) => {
    const ZeroWidthusr = usr.replace(/[^​‌‍﻿]/g, "");
    const userBin = zeroBin(ZeroWidthusr);
    return binToTxt(userBin);
  };
