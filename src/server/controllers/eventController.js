import {Event} from '../models/event';
import {User} from '../models/user';

class EventController {

	/**
	 * Save a new Event
	 *	@param  {"name":"Birthday celebrations of Mike","organizer":{"name":"John Doe","email":"joh.doe@gmail.com","phone":"1234123421"}} request 
	* 	@param {*} response
	*/
	save(request, response) {
		let organizer = new User({
			name: request.body.organizer.name,
			email: request.body.organizer.email,
			phone: request.body.organizer.phone
		});
		let event = new Event({
			name: request.body.name,
			organizer: organizer,
			activities: []
		});
		event.save()
			.then((event) => {
				response.json(event);
			});

		console.log('Saving the event');
		console.log(event);
	}

	get(eventId, request, response) {
		Event.findById(eventId, 
			(error, event) => { 
				if (error) response.send('Unable to find event with id: ' + request.params.eventId + '. ' + error);
				else {
					response.json(event);
				}
			}
		);
	}
}

export default new EventController();