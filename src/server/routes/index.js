import express from 'express';
import eventRouter from './eventRouter';
import activityRouter from './activityRouter';
import slotRouter from './slotRouter';

const router = express.Router();

router.get('/heartbeat', (request, response) => {
    response.send('API is running');
    console.log('API is running!');
});

router.use('/events', eventRouter);
eventRouter.use('/:eventId/activities', activityRouter);
activityRouter.use('/:activityId/slots', slotRouter);

export default router;