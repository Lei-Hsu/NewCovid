import React from 'react'
import QnA from '../../../ProjectComponents/QnA/QnA'

function Components(props) {
  return (
    <div className={`container min-h-screen mx-auto flex flex-col justify-start items-center`}>
      <div className={`my-8`}>
        <div className={`border-l-2 border-r-2 border-red-500 py-4 mb-8 text-center text-2xl tracking-wider`}>練習串接API作品集</div>
        {
          props.IntroInfor.map(item => {
            return (
              <p key={item.id} className={`tracking-wider`}>{item.content}</p>
            )
          })
        }
      </div>
      <div className={`w-2/3 lg:w-1/3`}>
        {
          props.QnAInfor.map(item => {
            return (
              <QnA
                key={item.id}
                id={item.id}
                question={item.content}
                answer={item.answer}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Components
