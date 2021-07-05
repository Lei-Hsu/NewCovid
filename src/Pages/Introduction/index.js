import React from 'react'
import Components from './Components/Components'

function Introduction() {

  const IntroInfor = [
    {
      id: 1,
      content: "首頁顯示過去一年每個月首日新增確診人數"
    },
    {
      id: 2,
      content: "搜尋頁可以查詢當日單一國家的最新資訊"
    },
    {
      id: 3,
      content: "排行榜頁顯示當日死亡率以及五大洲前嚴重國家"
    }
  ]

  const QnAInfor = [
    {
      id: 1,
      content: "使用JS框架?",
      answer: "使用 Create-react-app 搭配 Hooks 以及 useContext 傳遞資料"
    },
    {
      id: 2,
      content: "使用UI框架?",
      answer: "使用 Tailwind css做成組件搭配 props 傳遞資料，圖表則是使用 Rechart.js"
    },
    {
      id: 3,
      content: "資料是哪裡來的?",
      answer: "使用 Rapid API 這個網站中免費的API"
    },
  ]

  return (
    <Components
      IntroInfor={IntroInfor}
      QnAInfor={QnAInfor}
    />
  )
}

export default Introduction
