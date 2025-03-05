import React from 'react'

export default function MbaRenderList() {
    const mbaNames = ["Hùng","Dũng","Sang","Trọng"];

    // Hiển thị giá trị của mảng
    const mbaElementName = mbaNames.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div>
      <h2>Danh sách các anh hùng thời đại</h2>
      {mbaElementName}
    </div>
  )
}