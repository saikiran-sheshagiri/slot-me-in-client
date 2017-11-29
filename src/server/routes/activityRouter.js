import express from 'express';
import activityController from '../controllers/activityController';

let router = express.Router({mergeParams: true});

router.route('/')
		.get((request, response, next) => {
			activityController.getAll(request,response);
		})
		.post((request, response, next) => {
			activityController.save(request, response);
		});

router.route('/:activityId')
		.delete((request, response, next) => {
			activityController.deleteActivity(request.params.activityId, request, response);
		})

export default router;