import connectToDatabase from '@/utils/mongodb';
import Event from '@/models/Event';

export async function GET(req) {
  await connectToDatabase();
  const events = await Event.find();
  return new Response(JSON.stringify(events), { status: 200 });
}
