import mongoose from 'mongoose';
import { userSchema, User } from './user';
import { slotSchema, Slot } from './slot';

export const activitySchema = new mongoose.Schema(
	{
		name: String,
		activityDate: Date,
		duration: Number,
		numberOfSlots: Number,
		slots: [slotSchema]
	}, 
	{
		timestamps: true
	}
);

export const Activity = mongoose.model('Activity', activitySchema);