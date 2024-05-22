import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";


function users() {
return (<><div className="font-bold text-center text-3xl">ユーザー編集</div>


<table className="min-w-full border-collapse block md:table">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">名前</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">ログインID</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">登録日</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">種別</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody className="block md:table-row-group">
			<tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">名前</span>ドラえもん</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">ログインID</span>dorayaki</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">登録日</span>2024/05/21</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">種別</span>admin</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<Link href="/users/edit"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button></Link>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
				</td>
			</tr>
      <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">名前</span>ドラミ</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">ログインID</span>dorayaki</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">登録日</span>2024/05/21</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">種別</span>admin</td>
				<td className="p-2 md:border md:border-grey-300 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<Link href="/users/edit"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button></Link>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
        </td>
      </tr>
		</tbody>
	</table>
  <div><Link href="/users/create">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Add user
  </button></Link></div>
  <div><Link href="/admin">
  <button className="absolute top-0 right-0 bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-1 border border-gray-400 rounded">戻る
  </button></Link></div>
  <div><Link href="/login" className="font-bold underline"> ログアウト </Link></div>
</>)
}

export default users;