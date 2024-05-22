import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";



function About() {
  return (<div><p>ログインできました</p>
<p><Link href="/admin">
<button className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer">管理者画面へ</button></Link></p>
<p><Link href="/event">
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">イベント一覧へ</button></Link></p>
<Link href="/login" className="font-bold underline"> ログアウト </Link>
</div>)
}

export default About;