import connectToDatabase from '@/utils/mongodb';
import Event from '@/models/Event';

export async function POST(req, { params }) {
  const { userId } = await req.json();
  await connectToDatabase();

  const event = await Event.findById(params.id);
  if (!event) return new Response('Event not found', { status: 404 });

  if (event.registeredUsers.includes(userId)) {
    return new Response('User already registered', { status: 400 });
  }

  event.registeredUsers.push(userId);
  await event.save();

  return new Response('Registration successful', { status: 200 });
}
