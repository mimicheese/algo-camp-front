import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";


function questionsmanagement() {
return (<><div className="font-bold text-center text-3xl">問題一覧</div>


<table className="min-w-full border-collapse block md:table">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">問題ID</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">問題名</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">対応イベント名</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody className="block md:table-row-group">
			<tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">問題ID</span>1</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">問題名</span>question-01-01</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">対応イベント名</span>Python_ソート_01</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<Link href="/questionsmanagement/edit"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">✏️</button></Link>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">🗑️</button>
				</td>
			</tr>
      <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">問題ID</span>2</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">問題名</span>question-01-02</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">対応イベント名</span>Python_ソート_02</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<Link href="/questionsmanagement/edit"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">✏️</button></Link>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">🗑️</button>
        </td>
      </tr>
		</tbody>
	</table>
  <div><Link href="/questionsmanagement/create">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Add question
  </button></Link></div>
  <div><Link href="/admin">
  <button className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-500 rounded">戻る
  </button></Link></div>
  <div><Link href="/login" className="font-bold underline"> ログアウト </Link></div>
</>)
}

export default questionsmanagement;