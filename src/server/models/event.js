import mongoose from 'mongoose';
import { activitySchema, Activity } from './activity';
import { userSchema, User } from './user';

export const eventSchema = new mongoose.Schema({ 
	name: String,
	organizer: userSchema,
	activities: [activitySchema]
}, {
    timestamps: true
});

export const Event = mongoose.model('Event', eventSchema);
