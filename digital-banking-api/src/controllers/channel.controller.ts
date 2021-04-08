import {Router, Request, Response} from 'express';
import {Channel} from './../models/channel.model';

const router: Router = Router();
let channels: Channel[] = [{
    id: 'APP',
    name: 'Mobile Banking',
    description: 'Mobile application supported for Android and iOS'
}, {
    id: 'BPI',
    name: 'Internet Banking',
    description: 'Web application'
}];

router.get('/', async (req: Request, res: Response) => {
    res.send(channels);
});

router.get('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    res.send(channels.filter(channel => channel.id === id));
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

    let channel = await new Channel();
    channel.id = id;
    channel.name = name;
    channel.description = description;

    channels.push(channel);

    res.status(201).send(channel);
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;

    if (!name) {
        return res.status(400).send({message: 'Name is required.'});
    }

    const index = channels.findIndex(channel => channel.id === id);
    channels[index].name = name;
    channels[index].description = description;

    res.sendStatus(204);
});

router.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    channels = channels.filter(channel => channel.id !== id);

    res.sendStatus(204);
});

export const ChannelRouter: Router = router;