import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const PRICE_EFFORT: number = 4

const app: express.Application = express()

app.use(cors({origin: '*'}))
app.use(cookieParser())


app.get('/prize', (req: Request, res: Response) => {
    const times: number = parseInt(req.cookies?.times ?? '0') + 1
    const [cookie, prize] = times >= PRICE_EFFORT ? [0,'1F451'] : [times, '1F4A9']
    res.cookie('times', '' + cookie, {
        maxAge: 86_400_000,
        httpOnly: true,
        secure: true,
    });
    res.status(200).send(prize)
})

export default app;
