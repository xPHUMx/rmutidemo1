'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter(); // ใช้ useRouter สำหรับเปลี่ยนเส้นทาง
  const [events, setEvents] = useState([]);

  // ดึงข้อมูลกิจกรรม
  useEffect(() => {
    async function fetchEvents() {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    }
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">RMUTI Khon Kaen Activity Hub</h1>
        {!session ? (
          // เปลี่ยนเส้นทางไปหน้า login เมื่อกดปุ่มนี้
          <button
            onClick={() => router.push('/login')}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            ล็อกอิน
          </button>
        ) : (
          <p className="text-sm">สวัสดี, {session.user.name}</p>
        )}
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">ข้อมูลสรุป</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">กิจกรรมที่เข้าร่วมแล้ว</h3>
            <p className="text-3xl font-bold">4</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">ออนไลน์</h3>
            <p className="text-3xl font-bold">132</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">กิจกรรมทั้งหมด</h3>
            <p className="text-3xl font-bold">6</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-lg font-bold">เฉลี่ยคนในระบบ</h3>
            <p className="text-3xl font-bold">78%</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">กิจกรรมทั้งหมด</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div key={event._id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-sm text-gray-400">{event.description}</p>
              <p className="text-sm text-gray-400">วันที่: {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-sm text-gray-400">สถานที่: {event.location}</p>
              {session ? (
                <button
                  onClick={() => registerEvent(event._id)}
                  className="mt-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  ลงทะเบียน
                </button>
              ) : (
                <p className="text-red-400 mt-2 text-sm">กรุณาล็อกอินเพื่อลงทะเบียน</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  async function registerEvent(eventId) {
    try {
      await axios.post(`/api/events/${eventId}/register`, { userId: session.user.id });
      alert('ลงทะเบียนสำเร็จ');
    } catch (error) {
      console.error(error);
      alert('เกิดข้อผิดพลาดในการลงทะเบียน');
    }
  }
}
