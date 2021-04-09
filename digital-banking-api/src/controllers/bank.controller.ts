import {Router, Request, Response} from 'express';
import {Bank} from './../models/bank.model';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send(await Bank.findAll());
});

router.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    const item = await Bank.findByPk(id);

    res.send(item);
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

    const saveItem = await Bank.findOrCreate({
        where: {
            id: id
        }, 
        defaults: {
            id: id, 
            name: name
        }
    });

    res.status(201).send(saveItem);
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const name = req.body.name; 

    if (!name) {
        return res.status(400).send({message: 'Name is required.'});
    }

    await Bank.update({
        name: name
    }, {
        where: {
            id: id
        }
    });

    res.sendStatus(204);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    await Bank.destroy({
        where: {
            id: id
        }
    });

    res.sendStatus(204);
});

export const BankRouter: Router = router;