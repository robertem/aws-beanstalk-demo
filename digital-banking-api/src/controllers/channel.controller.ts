import {Router, Request, Response} from 'express';
import {Channel} from './../models/channel.model';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send(await Channel.findAll());
});

router.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    
    const item = await Channel.findByPk(id);

    res.send(item);
});

router.post('/', async (req: Request, res: Response) => {
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
  
    if (!id) {
        return res.status(400).send({message: 'Id is required.'});
    }

    if (!name) {
        return res.status(400).send({message: 'Name is required.'});
    }

    const saveItem = await Channel.findOrCreate({
        where: {
            id: id
        }, 
        defaults: {
            id: id, 
            name: name,
            description: description
        }
    });

    res.status(201).send(saveItem);
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;

    if (!name) {
        return res.status(400).send({message: 'Name is required.'});
    }

    await Channel.update({
        name: name,
        description: description
    }, {
        where: {
            id: id
        }
    });

    res.sendStatus(204);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    await Channel.destroy({
        where: {
            id: id
        }
    });

    res.sendStatus(204);
});

export const ChannelRouter: Router = router;