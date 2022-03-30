import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app: express.Application = express()

app.use(cors({
    credentials: true,
    origin: 'https://imanolvalero.github.io'
}))
app.use(cookieParser())


app.get('/prize', (req: Request, res: Response) => {
    const times: number = parseInt(req.cookies?.times ?? '0') + 1
    const luckyNumber = Math.floor((Math.random() * 5) + 1)
    const [cookie, prize] = times >= luckyNumber ? [0,'1F451'] : [times, '1F4A9']
    res.cookie('times', '' + cookie, {
         maxAge: 86_400_000,
         sameSite: 'lax'
    });
    res.status(200).send(prize)
})

export default app;
