import { IUser, User } from './User';

export interface ISlot {
	_id: String;
	participant: IUser;
	notes: String;
}

export class Slot implements ISlot {
	_id: String;
	participant: User;
	notes: String;
}
