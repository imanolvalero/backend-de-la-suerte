import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const PRICE_EFFORT: number = 4

const app: express.Application = express()

app.use(cors({origin: '*'}))
app.use(cookieParser())


app.get('/prize', (req: Request, res: Response) => {
    const times: number = (parseInt(req.cookies['times']) || 0) + 1
    
    if (times >= PRICE_EFFORT) {
        res.cookie('times', '' + times).status(200).send('1F451')
    } else {
        res.cookie('times', '0').status(200).send('1F4A9')
    }
})

export default app;
