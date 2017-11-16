import { ISlot, Slot } from './Slot';

export interface IActivity {
	name: String;
	activityDate: String;
	duration: Number;
	numberOfSlots: Number;
	slots: ISlot[];
}

export class Activity implements IActivity {
	name: String;
	activityDate: String;
	duration: Number;
	numberOfSlots: Number;
	slots: Slot[];
}
