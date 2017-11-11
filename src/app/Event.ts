import { User } from './User';
import { Activity } from './Activity';

export class Event {
	name: String;
	organizer: User;
	activities: [Activity];
}
