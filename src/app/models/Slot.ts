import { IUser, User } from './User';

export interface ISlot {
	participant: IUser;
	notes: String;
}

export class Slot implements ISlot {
	participant: User;
	notes: String;
}
