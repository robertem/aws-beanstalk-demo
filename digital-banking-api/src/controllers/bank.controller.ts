import {Router, Request, Response} from 'express';
import {Bank} from './../models/bank.model';

const router: Router = Router();
let banks: Bank[] = [{
    id: 'IBK',
    name: 'Banco Internacional del Perú'
}, {
    id: 'BCP',
    name: 'Banco de Crédito del Perú'
}];

router.get('/', async (req: Request, res: Response) => {
    res.send(banks);
});

router.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    res.send(banks.filter(bank => bank.id === id));
});

router.post('/', async (req: Request, res: Response) => {
    const id = req.body.id;
    const name = req.body.name; 
  
    if (!id) {
        return res.status(400).send({message: 'Id is required.'});
    }

    if (!name) {
        return res.status(400).send({message: 'Name is required.'});
    }

    let bank = await new Bank();
    bank.id = id;
    bank.name = name;

    banks.push(bank);

    res.status(201).send(bank);
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const name = req.body.name; 

    if (!name) {
        return res.status(400).send({message: 'Name is required.'});
    }

    const index = banks.findIndex(bank => bank.id === id);
    banks[index].name = name;

    res.sendStatus(204);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    banks = banks.filter(bank => bank.id !== id);

    res.sendStatus(204);
});

export const BankRouter: Router = router;