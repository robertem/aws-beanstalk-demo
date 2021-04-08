import {Router, Request, Response} from 'express';
import {BankRouter} from './bank.controller';
import {ChannelRouter} from './channel.controller';

const router: Router = Router();

router.use('/banks', BankRouter);
router.use('/channels', ChannelRouter);

router.get('/', async (req: Request, res: Response) => {
    res.send('OK');
});

export const IndexRouter: Router = router;