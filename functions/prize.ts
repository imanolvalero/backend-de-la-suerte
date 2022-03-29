import express, { Request, Response } from 'express';
import cors from 'cors';

const PRICE_EFFORT: number = 4

const app: express.Application = express()

app.use(cors({origin: '*'}))


app.get('/prize', (req: Request, res: Response) => {
    const times: number = (parseInt(req.cookies['times']) || 0) + 1
    const [tries, prize] = times >= PRICE_EFFORT ? [0,'1F451'] : [times, '1F4A9']
    res.set('times', '' + tries)
    res.set('Access-Control-Expose-Headers', 'times')
    res.status(200).send(prize)
})

export default app;
