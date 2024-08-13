import React from 'react'
import './Program.css'
import dummy2 from '../../assets/dummy2.jpg'
import dummyicon from '../../assets/dummyicon.png'

const Program = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={dummy2} alt=''/>
        <div className="caption">
          <img src={dummyicon} alt=''/>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className='program'>
        <img src={dummy2} alt=''/>
        <div className="caption">
          <img src={dummyicon} alt=''/>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className='program'>
        <img src={dummy2} alt=''/>
        <div className="caption">
          <img src={dummyicon} alt=''/>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Program