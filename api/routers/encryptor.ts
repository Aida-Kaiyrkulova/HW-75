import express from "express";
const Vigenere = require('caesar-salad').Vigenere;

const encryptorRouter = express.Router();

encryptorRouter.post('/encode', (req , res ) => {
    const {password, message} = req.body;
    const encodeMessage = new Vigenere.Cipher(password).crypt(message);
    res.send({ encoded: encodeMessage });
});

encryptorRouter.post('/decode', (req , res ) => {
    const {password, message} = req.body;
    const decodeMessage = new Vigenere.Decipher(password).crypt(message);
    res.send({ decoded: decodeMessage });
});

export default encryptorRouter;