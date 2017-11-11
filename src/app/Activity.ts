import { Slot } from './Slot';

export class Activity {
	name: String;
	activityDate: Date;
	duration: Number;
	numberOfSlots: Number;
	slots: [Slot];
}
