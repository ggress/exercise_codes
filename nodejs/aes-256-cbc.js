'use strict';

const crypto = require('crypto');
const ENC_KEY = "DWIzFkO22qfVMgx2fIsxOXnwz10pRuZfFJBvf4RS3eY="; // set random encryption key
const ENC_IV = "AcynMwikMkW4c7+mHtwtfw=="; // set random initialisation vector
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

const phrase = "Test";

function getAlgorithm(keyBase64) {
    
    var key = Buffer.from(keyBase64, 'base64');
    switch (key.length) {
        case 16:
            return 'aes-128-cbc';
        case 32:
            return 'aes-256-cbc';
            
    }
    
    throw new Error('Invalid key length: ' + key.length);
}

var encrypt = ((val) => {
    const key = Buffer.from(ENC_KEY, 'base64');
    const iv = Buffer.from(ENC_IV, 'base64');
    let cipher = crypto.createCipheriv(getAlgorithm(ENC_KEY), key, iv);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
});

var decrypt = ((encrypted) => {
    const key = Buffer.from(ENC_KEY, 'base64');
    const iv = Buffer.from(ENC_IV, 'base64');
    let decipher = crypto.createDecipheriv(getAlgorithm(ENC_KEY), key, iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
});



let encrypted_key = encrypt(phrase);
let original_phrase = decrypt(encrypted_key);

console.log("Encrypted Phrase: ", encrypted_key);
console.log("Original Phrase: ", original_phrase);

let msgbase64 = 'xh81tkrskyQubj+gdtmDbopGWOvtxnQTWgHZNpuCUluYexwBVvurCRY1HLRXVILIObVdSTxIS76GK6UwcGV+5n2Pdpk3QSpyaSVscZqhrQ0kqK3Gvcu1QFvowTYEAuTFVpjhSsWUs+0TmvJGieqVdvtV5tOFWCaDWng4Qzv404mM+v1pILe21Lfh0r3ViKMhzSQNzIKESuIzARPNf0uuzaeFZugXKLiCA5tpZFf31NFNwXl4K71dUFGz8/11MKJjYkQ21bzx0YpxFXaUaGtn753HIsQ77Dr4MD9JEZlnN+r0tenDnZ9Rz+cJ1my/3UfyQuhOqs/7xbiSzx9Vm+RFB7llX3kJQsHQ6U1TJnY15euR5422W0XLtR/JrXxiCDVDCvfj83CCY/TX4NwVTM7JHUm54ltzvj/Tg0TVkBDl2L0MVih3tdhstVWS5qbHeRNl0ej8y/JGun1dNeRoIa97VT6HoyNyY8nIpPVULug9hCt/bV6TOnyLTQ8c0Bi4sayVHnDnMEx/GMIyfRUdfpxJkTm1Od1ncQ+foJBKgFpNH/oJjUzumdbJubUrFlOANHmNUaBeSCxb+J8eK7M6kmSpJNei+QVGJ3FnyYrHsno6ifpX1+2slem8FhFBarUAEBZnu6OkWeAdVnKIkM3z0sQnECq2PUbOp9JR7XPIIrbTUmi7n7wr5s3ctJjlIevHwu/aBEhjVqm1WIvnLWKRLAs0cmBasDXU8gUVdzk2a1kSoMQOJBwcRjOe8oz6SKw4TJGC2XsQLWjnnTdfvCIXEBiaeeTQ93cmAmiAKpbKrnm7sCMqkVA/OtSenZnK/PD351zUisoupndT1oq+jA7gMLWTF2Q8e2upN1wmiXbUXnRFdKqdCoe6grGsyTu9yvCrugDMk96CQwEcpFussfFmeCYjCqw8/I3dYZKizMGlYHmwpE4pSmwpAezxlNDjbjYdwU2saOEqvuXDRTc1f6nD9dcG/rzhDTbp3p09gApZXksTF8jY9bt9E73TAB7hab9coJVsTMZRqvSrTsfEvutC0nmfVgfUQIrw6ToVAR8LOJjiNQeRpdPwmfdAn3JsCfsbZhgdf4OZeAU5vypcUJDuAV8g2zBs3qw7Mx+jIc2ktZ9Wsg7twyRk/o9UcLPYPQirOmtZbOw8wNwj18mnUaAh6B7JxaZudlmSIBWTEJpdPcIXS/Xt3YcolYLxj5dEbsCnAclMOQph9WC/XlPrgoKQokRGKbNvJJfJuvig4h2AJ1r8MDQeg0TCbgPiy3tI2Z+rLyLFRQJV16qoAwrabKuBd5Gx/rystVX2mubYz1rt1lR6s+lT5NS1M8b6e+QqcRc+l1muZrYj9OJlCeF7n3SLszibPdEZmZInC/VYUJX922vB1ytoxqdqVfIsRP8TrxRtvjcQc8/j+d6lXY5Tx+TfcT+dHEhXTeodb0iatyCfDal/SaHzZlgSkiDqppY9g2JLhjnoDyA5lPo1nWuDHhBwPPhE7Qdfa6QtXNHe2O7u59ROrVhewItLuMdK7hcmM85bWuJRPnlb1nDVzQKrHcu+Aq8mMPidiyPY2WYzeUd1dQGclBKfzbxIru+P/lQkYxScQN7mb+TghDH9YMVL/DmUYUrg1ze9yB61mOJ8ckuXA/zCBbKyV8WxY1Kfx5uYUKX7oaHjFpdGidxWUyZ8groh1WOdsMp+5LUB3q+yXw67WgkpJWzjBxyPJ9hQ37IYt4lVvA/tU8YNsifyovBWhq+I56ignrwkfDnQw/7MHoU5GzRZVi+s942M6jBR8pqx0u1YSRaZZcJ+SkDL5mvuD+N+fLaLqQkl7rhlNmygqs/AQZfHqVXjf0jwWRGn6XUY4Tgx6FKqcOY7Q7O5QK3iJvlelYkkbXeCQELEBJQMC9GwQJIJ3Hb8IpaIouiMtIECuwdl97hu';
const msg = Buffer.from(decrypt(msgbase64), 'base64');
const prospectos = JSON.parse(msg.toString('utf8'));
console.log('=== Print Prospectos ===');
prospectos.forEach(prospecto => {
    console.log('idProspecto: ', prospecto.IdProspecto);
});
