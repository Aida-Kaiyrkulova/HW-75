import express from "express";
const Vigenere = require('caesar-salad').Vigenere;

const encryptorRouter = express.Router();

encryptorRouter.post('/encode', (req , res ) => {
    const {password, message} = req.body;
    const encodedMessage = new Vigenere(password).crypt(message);
    res.send({Encoded:encodedMessage});
});

encryptorRouter.post('/decode', (req , res ) => {
    const {password, message} = req.body;
    const decodedMessage = new Vigenere(password).crypt(message);
    res.send({Decoded:decodedMessage});
});

export default encryptorRouter;