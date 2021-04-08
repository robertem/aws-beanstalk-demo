import express from 'express';
import {IndexRouter} from './controllers/index.controller'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/', IndexRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Press CTRL+C to stop server` );
});