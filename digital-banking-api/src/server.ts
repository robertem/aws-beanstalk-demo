import express from 'express';
import {IndexRouter} from './controllers/index.controller'
import {sequelize} from './sequelize';
import {models} from './models/index.model'

const app = express();
const port = process.env.PORT || 8080;

(async () => {
    await sequelize.addModels(models);
    await sequelize.sync();

    app.use(express.json());
    app.use('/', IndexRouter);

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
        console.log(`Press CTRL+C to stop server` );
    });
})();