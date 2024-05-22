import { table } from "console";
import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";


function event() {
return (<><div className="font-bold text-center text-3xl">イベント一覧</div>


<table className="min-w-full border-collapse block md:table">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">イベント名</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">開始</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">終了</th>
            </tr>
        </thead>
		<tbody className="block md:table-row-group">
			<tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<Link href="/questions" className="font-bold underline"><td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">イベント名</span>Python_スタック_01</td></Link>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">開始</span>2024/05/22 10:00</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">終了</span>2024/05/23 12:00</td>
			</tr>
      <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
      <Link href="/questions" className="font-bold underline"><td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">イベント名</span>Java_スタック_01</td></Link>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">開始</span>2024/05/30 14:00</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">終了</span>2024/05/31 15:00</td>
        </tr>
      </tbody>
	</table>
  <><div><Link href="/about">
            <button className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-500 rounded">戻る
            </button></Link></div><div><Link href="/login" className="font-bold underline"> ログアウト </Link></div></>
</>)
}

export default event;