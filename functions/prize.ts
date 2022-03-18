import express, { Response } from 'express';
import cors from 'cors';

const app = express()

app.use(cors({
    origin: '*'
}))

app.get('/prize', (_, res: Response) => {
    res.status(200).send('1F451')
})

export default app;
