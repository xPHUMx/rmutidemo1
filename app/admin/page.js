'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminPanel() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      {/* คุณสามารถเพิ่มฟอร์มแก้ไข/เพิ่มกิจกรรมที่นี่ */}
    </div>
  );
}
