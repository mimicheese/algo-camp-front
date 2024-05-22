import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";



function Admin() {
  return (<><div className="font-bold text-center text-3xl">管理者画面</div>
  <div><Link href="/users">
      <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">ユーザー管理</button></Link></div>
      <div><Link href="/questionsmanagement">
          <button className=" bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">問題管理</button></Link></div>
          <div><Link href="/eventmanagement">
            <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer">イベント管理</button></Link></div>
                <div><Link href="/login" className="font-bold underline"> ログアウト </Link></div>

                <Link href="/about" className="font-bold underline">
<button
        className="absolute top-0 right-0 bg-blue-500 text-white font-bold py-1 px-1 rounded-md hover:bg-blue-600 transition duration-300"
        type="submit">戻る</button></Link>
</>)
}

export default Admin;