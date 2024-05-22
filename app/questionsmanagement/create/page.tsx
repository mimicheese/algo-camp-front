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
    <h1 className="text-2xl font-bold mb-6 text-center">問題作成</h1>
    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
    <div className="mb-4">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">対応イベント名</label>
      <div className="relative">
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>Python_ソート_01</option>
          <option>Python_ソート_02</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">問題名</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="question"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="difficult">難易度</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="difficult" name="difficult" placeholder="A"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">制限時間</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="time" name="time" placeholder="2000"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="memory">メモリ制限</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="memory" name="memory" placeholder="2000000"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">問題内容</label>
        <input className="w-full px-3 py-6 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="confirm-password" name="confirm-password"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">制約</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="constraint" name="constraint" placeholder="制約"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">入力フォーマット</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="input" name="input" placeholder="入力"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">出力フォーマット</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="output" name="output" placeholder="出力"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">入力例1</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="inputexample1" name="inputexample1" placeholder="入力例1"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">出力例1</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="outputexample1" name="outputexample1" placeholder="出力例1"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">入力例2</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="inputexample2" name="inputexample2" placeholder="入力例2"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">出力例2</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="outputexample2" name="outputexample2" placeholder="出力例2"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト入力値1</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testinput1" name="testinput1" placeholder="テスト入力値1"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト出力値1</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testoutput1" name="testoutput1" placeholder="テスト出力値1"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト入力値2</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testinput2" name="testinput2" placeholder="テスト入力値2"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト出力値2</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testoutput2" name="testoutput2" placeholder="テスト出力値2"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト入力値3</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testinput3" name="testinput3" placeholder="テスト入力値3"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト出力値3</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testoutput3" name="testoutput3" placeholder="テスト出力値3"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト入力値4</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testinput4" name="testinput4" placeholder="テスト入力値4"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト出力値4</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testoutput4" name="testoutput4" placeholder="テスト出力値4"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト入力値5</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testinput5" name="testinput5" placeholder="テスト入力値5"></input>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">テスト出力値5</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="testoutput5" name="testoutput5" placeholder="テスト出力値5"></input>
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
<Link href="/questionsmanagement" className="font-bold underline">
<button
        className="absolute top-0 right-0 bg-blue-500 text-white font-bold py-1 px-1 rounded-md hover:bg-blue-600 transition duration-300"
        type="submit">戻る</button></Link>
<div><Link href="/login" className="font-bold underline"> ログアウト </Link></div>
</>)
}

          export default create;