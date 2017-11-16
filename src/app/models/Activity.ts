import { ISlot, Slot } from './Slot';

export interface IActivity {
	_id: String;
	name: String;
	activityDate: String;
	duration: Number;
	numberOfSlots: Number;
	slots: ISlot[];
}

export class Activity implements IActivity {
	_id: String;
	name: String;
	activityDate: String;
	duration: Number;
	numberOfSlots: Number;
	slots: Slot[];
}
