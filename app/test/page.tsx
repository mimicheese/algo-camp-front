/* eslint-disable @next/next/no-sync-scripts */
import { Bellota } from "next/font/google"
import Image from "next/image";
import Link from 'next/link';
import React from "react";

function test() {
    return (<>
  <script src="https://cdn.tailwindcss.com"></script>
  <body className="bg-gray-100">
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">問題実施</h1>
      <form className="w-full max-w-xl mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">使用言語</label>
        <div className="relative">
          <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
            <option>Python</option>
            <option>Typescript</option>
          </select>
          <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">問題</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
            n個の整数が並んでいます。i番目の整数はa(i)で表します。<br/>
            これらの数が全て互いに異なるかどうか判定してください。
          </h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">制約</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
            ・1 ＜＝ n ＜＝ 50<br/>
            ・1 ＜＝ a(i) ＜＝ 1,000<br/>
            ・入力は全て整数値
            </h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">入力<br/>下記のよう標準入力から入力する</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >n <br/>a(1) a(2) a(3)
            </h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="memory">出力</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
            n個の整数が全て互いに異なるとき YES 、<br/>
            そうでないとき NO と出力せよ。
          </h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">入力例1:</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
          4<br/>1 3 4 3
          </h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">出力例1:</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
          NO
          </h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">入力例2:</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
          4<br/>1 4 2 3
          </h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">出力例2:</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >YES</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">入力例3:</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >5<br/>1 4 2 3 5</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">出力例3:</label>
          <h2 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            >YES</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="constraint">ソースコード</label>
          <textarea className="w-full aspect-square border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" />
        </div>
 
        <button
          className="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          type="submit">採点する</button>
          <h2>score:</h2>
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
  
            export default test;
