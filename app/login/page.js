'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-white mb-6">เข้าสู่ระบบ</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Email / ชื่อผู้ใช้</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email / ชื่อผู้ใช้"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">รหัสผ่าน</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="รหัสผ่าน"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="flex items-center justify-between my-4 text-gray-500">
          <span className="border-b border-gray-600 flex-1"></span>
          <span className="px-2 text-sm">หรือ</span>
          <span className="border-b border-gray-600 flex-1"></span>
        </div>

        <button
          onClick={() => signIn('google')}
          className="w-full py-2 bg-white text-gray-900 font-bold rounded-lg flex items-center justify-center hover:bg-gray-100"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          เข้าสู่ระบบด้วย Google
        </button>

      </div>
    </div>
  );
}


