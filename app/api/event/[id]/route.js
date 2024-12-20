import connectToDatabase from '@/utils/mongodb';
import Event from '@/models/Event';

export async function GET(req, { params }) {
  await connectToDatabase();
  const event = await Event.findById(params.id);
  return new Response(JSON.stringify(event), { status: 200 });
}

export async function PUT(req, { params }) {
  await connectToDatabase();
  const body = await req.json();
  const updatedEvent = await Event.findByIdAndUpdate(params.id, body, { new: true });
  return new Response(JSON.stringify(updatedEvent), { status: 200 });
}

export async function DELETE(req, { params }) {
  await connectToDatabase();
  await Event.findByIdAndDelete(params.id);
  return new Response(null, { status: 204 });
}
