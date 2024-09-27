
require('dotenv').config();

const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const secretKey = process.env.SECRET_KEY; 

// Example encrypted password
const encryptedPassword = 'U2FsdGVkX19V0plNSUTLJYm10MzNIbf5KBX+rP0J/kg='; // Replace with the actual encrypted password


const parts = encryptedPassword.split(':');
const iv = Buffer.from(parts.shift(), 'hex');
const encryptedText = Buffer.from(parts.join(':'), 'hex');

// Decrypt using the SECRET_KEY and IV
const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
let decrypted = decipher.update(encryptedText);
decrypted = Buffer.concat([decrypted, decipher.final()]);

console.log('Decrypted password:', decrypted.toString());
