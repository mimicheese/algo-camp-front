/* eslint-disable @next/next/no-sync-scripts */
import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";


function create() {
  return (<>
<script src="https://cdn.tailwindcss.com"></script>
<body className="bg-gray-100">
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-6 text-center">イベント新規作成</h1>
    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">イベント名</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="event"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">開始</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="start" name="start" placeholder="yyyy/mm/dd 12:00"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">終了</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="finish" name="finish" placeholder="yyyy/mm/dd 12:00"></input>
      </div>

      <button
        className="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        type="submit">作成</button>
        <button
        className="w-full bg-gray-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
        type="submit">キャンセル</button>
    </form>
  </div>
</body>
<Link href="/eventmanagement" className="font-bold underline">
<button
        className="absolute top-0 right-0 bg-blue-500 text-white font-bold py-1 px-1 rounded-md hover:bg-blue-600 transition duration-300"
        type="submit">戻る</button></Link>
<div><Link href="/login" className="font-bold underline">ログアウト</Link></div>
</>)
}

          export default create;