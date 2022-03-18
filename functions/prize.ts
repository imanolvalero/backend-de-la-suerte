import { Response } from 'express';

export default (_, res: Response) => 
    res.status(200).send('1F451');
