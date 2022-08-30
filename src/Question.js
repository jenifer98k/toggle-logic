import React,{useState} from 'react'
//import {AiOutlineMenu,AiOutlinePlus} from 'react-icons/ai'
const Question = ({title,info}) => {
  const [showInfo,setShowInfo] = useState(false)
  return (
<div className="container  p-0 ques">
<div class="row  bg-light p-3  ">
    <div class="col bg-light h5">
     {title}
    </div>
    <div class="col bg-light text-end">
     <button type='btn' className='btn btn-secondary'onClick={()=>setShowInfo(!showInfo)}>
      {showInfo ? <btn className='btn btn-secondary'>-</btn>: <btn  className='btn btn-secondary'>+</btn> }
     </button>
    </div>
   {showInfo && <p className='bg-light'>{info}</p>}
  </div>
</div>
  )
}

export default Question
