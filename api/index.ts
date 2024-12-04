import express from "express";
import cors from "cors";
import encryptorRouter from "./routers/encryptor"

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.use('/encryptor', encryptorRouter);

const run = async () => {
    app.listen(port, () => {
        console.log(`Server started on port http://localhost:${port}`);
    });
};

run().catch(err => console.log(err));