import React from 'react'
import MbaReadApiLocal from './component/MbaReadApiLocal'
import MbaReadMockAPI from './component/MbaReadMockAPI'
import MbaCreateMockAPI from './component/MbaCreateMockAPI'

export default function MbaApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Trịnh Văn Chung</h1>
        <hr/>
        <MbaReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <MbaReadMockAPI />

        <MbaCreateMockAPI />
    </div>
  )
}