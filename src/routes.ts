import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/points-controller';

const routes = express.Router();
const pointsController = new PointsController();

routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        const { id, title, image } = item;
        return {
            id,
            title,
            image_url: `http://localhost:3333/uploads/${image}`,
        };
    });

    return res.json(serializedItems);
});

routes.post('/points', pointsController.create);

export default routes;
