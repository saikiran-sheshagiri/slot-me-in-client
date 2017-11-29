import express from 'express';
import eventController from '../controllers/eventController';

let router = express.Router();

router.route('/')
		.post((request, response, next) => {
			eventController.save(request, response);
		});

router.route('/:eventId')
		.get((request, response, next) => {
			eventController.get(request.params.eventId, request, response);
		})

export default router;