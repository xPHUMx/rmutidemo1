import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String },
  maxParticipants: { type: Number, default: 100 },
  registeredUsers: { type: [String], default: [] },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
