import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";


function questions() {
return (<><div className="font-bold text-center text-3xl">問題一覧</div>


<table className="min-w-full border-collapse block md:table">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">難易度</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">問題名</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">実行時間制限</th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">メモリ制限</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell"> </th>
			</tr>
		</thead>
		<tbody className="block md:table-row-group">
			<tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">難易度</span>A</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">問題名</span>question-01</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">実行時間制限</span>2秒</td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">メモリ制限</span>1GB</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold"> </span>
					<Link href="/test"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">解答する</button></Link>
				</td>
			</tr>
            <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">難易度</span>A</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">問題名</span>question-02</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">実行時間制限</span>2秒</td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">メモリ制限</span>1GB</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold"> </span>
					<Link href="/test"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">解答する</button></Link>
				</td>
			</tr>
		</tbody>
	</table>

  <div><Link href="/event">
  <button className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-500 rounded">戻る
  </button></Link></div>
  <div><Link href="/login" className="font-bold underline"> ログアウト </Link></div>
</>)
}

export default questions;