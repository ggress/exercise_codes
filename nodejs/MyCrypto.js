'use strict';

const crypto = require('crypto');
const ENC_KEY = "Ni$$@N1nT3rF@$3Cl13nTS1c09#IpS05";
const ENC_IV = "C0rPSic0Intlopla";

function getAlgorithm(key) {
    var key = Buffer.from(key, 'utf8');
    switch (key.length) {
        case 16:
            //console.debug('Using: aes-128-cbc');
            return 'aes-128-cbc';
        case 32:
            //console.debug('Using: aes-256-cbc');
            return 'aes-256-cbc';
    }
    throw new Error('Invalid key length: ' + key.length);
}

function zeropad(inputData, length = 8) {
    inputData = inputData.toString("hex");
    //console.debug(`before padding \t${inputData}`)
    const bitLength = inputData.length * length;
    if (bitLength < 256) {
        for (let i = bitLength; i < 256; i += length) {
            inputData += 0;
        }
    } else if (bitLength > 256) {
        while ((inputData.length * length) % 256 != 0) {
            inputData += 0;
        }
    }
    //console.debug(`after padding \t${inputData}`)
    return Buffer.from(inputData, "hex");
}

class MyCrypto {

    constructor() { };

    encrypt(val) {
        const key = Buffer.from(ENC_KEY, 'utf8');
        const iv = Buffer.from(ENC_IV, 'utf8');
        //console.debug('IV length: ' + iv.length);
        let cipher = crypto.createCipheriv(getAlgorithm(ENC_KEY), key, iv);
        cipher.setAutoPadding(false);
        const data = Buffer.from(val, 'utf8');
        let encrypted = cipher.update(zeropad(data));
        let result = Buffer.concat([encrypted, cipher.final()]);
        return result.toString('base64',0,data.length);
        //return result.toString('base64');
    };

    decrypt(encrypted) {
        const key = Buffer.from(ENC_KEY, 'utf8');
        const iv = Buffer.from(ENC_IV, 'utf8');
        //console.debug('IV length: ' + iv.length);
        let decipher = crypto.createDecipheriv(getAlgorithm(ENC_KEY), key, iv);
        decipher.setAutoPadding(false);
        const data = Buffer.from(encrypted, 'base64');
        let decrypted = decipher.update(zeropad(data));
        let result = Buffer.concat([decrypted, decipher.final()]);
        //return result.toString('utf8',0,result.indexOf(0));
        //return result.toString('utf8');
        return result.indexOf(0) >= 0?result.toString('utf8',0,result.indexOf(0)):result.toString('utf8');
    };

}

let myCrypto = new MyCrypto();

let prueba = 'Veloz vuela el murcielago';
let cifrado = myCrypto.encrypt(prueba);

console.log('Cifrado:', cifrado);

let texto = myCrypto.decrypt(cifrado);
console.log('Decifrado:', texto);

cifrado = 'RQhcMagS/mkljc76MV8i4avCGO6Jx5XAuOg/YqRfeok=';
texto = myCrypto.decrypt(cifrado);
console.log('Texto:', texto);

cifrado = 'FwLxWjfaiNe2aPhDtXHfOg==';
texto = myCrypto.decrypt(cifrado);
console.log('Texto2:', texto);

let cifrados = [
    'qKl8SC8gi0MDgN5b4k5WWDyjS8acKdXHow==',
    'qKl8SC8gi0MDgN5b4k5WWDyjS8acKdXHo4pdxJMt1Mg=',
    "MKEwKqt2RLGhxw3nKktJ/A==",
    "zViPP9V2j4JJ4gfrfmcFvA==",
    "0ZygK5Ge/MTfy4TkcQUa6w==",
    "oJmRPUSWBCLGOSZgh2/yww==",
    "/CuJLg0fgBlVLVMO1VEV7Q==",
    "Zn9VvSqo3SbDP4F5aElSPg==",
    "Acem2DAzT2/+lc9EHsZtRw==",
    "pZMWYl6JFrJlRSSo9hkw0A==",
    "R/dcb73aSpBCgj8Nz52hWg==",
    "zFLnHl4eUMnvEDnM/XSyYw==",
    "R50WX4xqgczm5woD+Vm2uQ==",
    "R1Dd+kjt6PM7oHUB/3eKDmbQJqXdT69ArRJTm9HYYUk=",
    "8VSq87IHRiti6yHwZQfRpw==",
    "FwLxWjfaiNe2aPhDtXHfOg==",
    "HmSVYb/namu+m/5jG/xq3yO1IbEIw9uLxjGxJ9yOzRs=",

    "15wrqmGWOTPHSk2QTQCinQ==",
    "KJRE6MfEWwELDrjoeolCFw==",
    "aAj7GAgNCFzqaATzriB0Xg==",
    "dRWiVxdJFRpt6hDmYI76VA==",
    "fSnqUovoMJMqxXHmNRAOww==",
    "wywagj5GFqNGS7S5GSWG7w==",
    "Acem2DAzT2/+lc9EHsZtRw==",
    "JoaEFo8tob7QXvmDR1BjSw==",
    "R/dcb73aSpBCgj8Nz52hWg==",
    "P+lEeXpq+yT7RySJVTxugg==",
    "t6ikx9Oh+oEPUu29L04E6A==",
    "R1Dd+kjt6PM7oHUB/3eKDmbQJqXdT69ArRJTm9HYYUk=",
    "dKpoBvq2nscU6SIM0Rw8mg==",
    "Epngh3qK79taYjumdbz4bw==",
    "lO1r/CbGogaHP9KNlbhRC30Szz4uc7Ra9/yhwKzNIEE="
];

cifrados.forEach((x, index) => {
    let texto = myCrypto.decrypt(x);
    console.log('Texto%d: %s',index, texto);
});
