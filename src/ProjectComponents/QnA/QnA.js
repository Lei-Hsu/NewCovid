import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../Assets/ProjectComponents/QnA/ArrowTop.svg'

function QnA({ id, question, answer }) {

  const [openId, setOpenId] = useState([])

  return (
    <div className={`w-full mb-4 rounded-lg border-2 border-gray-200 relative ${openId.includes(id) && `shadow-md `}`}>
      <div
        className={`flex space-x-4 p-4 cursor-pointer ${openId.includes(id) && `border-b-2`}`}
        onClick={() => {
          if (!openId.includes(id)) {
            setOpenId(i => [...i, id])
          }
          else {
            setOpenId(i => [...i].filter(D => D !== id))
          }
        }}
      >
        <div className='w-7 h-7 bg-red-600 text-white rounded-md flex justify-center items-center'>
          Q{id}
        </div>
        <div>
          {question}
        </div>
        <div className={`${openId.includes(id) && `transform rotate-180`} transition duration-150 absolute right-5`}>
          <Arrow />
        </div>
      </div>
      <div className={`${openId.includes(id) ? `block` : `hidden`} p-4`}>
        {answer}
      </div>
    </div>
  )
}

export default QnA
