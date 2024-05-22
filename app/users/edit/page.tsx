/* eslint-disable @next/next/no-sync-scripts */
import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";


function edit() {
  return (<>
<script src="https://cdn.tailwindcss.com"></script>
<body className="bg-gray-100">
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-6 text-center">ユーザー登録</h1>
    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">名前</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="John Doe"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">ログインID</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="id" id="id" name="loginid" placeholder="login id"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">パスワード</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="password" name="password" placeholder="********"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">パスワード（確認）</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********"></input>
      </div>
      <div className="mb-4">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">種別</label>
      <div className="relative">
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>admin</option>
          <option>normal</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
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
<Link href="/users" className="font-bold underline">
<button
        className="absolute top-0 right-0 bg-blue-500 text-white font-bold py-1 px-1 rounded-md hover:bg-blue-600 transition duration-300"
        type="submit">戻る</button></Link>
<div><Link href="/login" className="font-bold underline"> ログアウト </Link></div>
</>)
}

          export default edit;