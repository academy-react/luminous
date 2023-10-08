import React from 'react'

// interface propsTypes{
//   title:string;
//   desc:string;
// }

const TitleBox = ({title  , desc}:{title:string; desc:string;}) => {
  return (
    <>
    <div className=' text-purple rounded-xl shadow-lg px-6 py-1 text-center'>
      <h2 className='text-2xl font-bold '>{title}</h2>
      <p className='text-base font-medium ' >{desc}</p>
    </div>
    </>
  )
}

export default TitleBox
