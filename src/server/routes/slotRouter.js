import express from 'express';
import slotController from '../controllers/slotController';

let router = express.Router({mergeParams: true});

router.route('/:slotId')
		.put((request, response, next) => {
			slotController.update(request, response);
		});

export default router;