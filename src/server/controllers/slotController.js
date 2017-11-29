import { Event } from '../models/event';
import { User } from '../models/user';

class SlotController {

	/**
	 * 
	 * @param {
	 * 	"participantName": "",
	 * 	"participantEmail": "",
	 *  "participantPhone": "",
	 * 	"participantNotes": ""
	 * } request 
	 * @param {*} response 
	 */
	update(request, response) {

		Event.findById(request.params.eventId, 
			(error, event) => { 
				if (error) response.send('Unable to find event with id: ' + request.params.eventId + '. ' + error);
				else {
					let activity = event.activities.find((activity) => {
						return activity._id.equals(request.params.activityId);
					});

					if(typeof activity === 'undefined') response.send('Unable to find the acitity with id: ' + request.params.activityId);
					else {
						let slot = activity.slots.find((slot) => {
							return slot._id.equals(request.params.slotId);
						});

						if(typeof slot === 'undefined') response.send('Unable to find the slot with slot id: ' + request.params.slotId);
						else {
							//TODO: validation of the input form variables
							let oParticipant = new User({
								name: request.body.participant.name,
								email: request.body.participant.email,
								phone: request.body.participant.phone
							});

							slot.participant = oParticipant;
							slot.notes = request.body.notes;

							event.save((error, event) => {
								if(error) {
									console.log('Unable to save the event with slot update'); 
									console.log(error);
								}
								else {
									response.json(event);
								}
							});
						}

					}
				}
			});
	}
}

export default new SlotController();
