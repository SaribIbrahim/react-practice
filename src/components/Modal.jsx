import React from 'react'
import './Modal.css'


function Modal({handleClick}) {
  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
            <h2>Modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem iure, earum inventore placeat sed illo est recusandae. Exercitationem ab et explicabo id velit neque atque tenetur ut ipsam aspernatur labore mollitia quaerat sint, illum fugiat odit assumenda expedita deserunt cupiditate laudantium cum dignissimos optio animi. Vel voluptates quasi quos nulla quaerat ipsum amet optio repudiandae, provident necessitatibus porro cupiditate adipisci consectetur minus temporibus magni recusandae dicta error ea aspernatur eveniet debitis rem odio quam? Fugit reiciendis cum qui amet quas ipsa repellat, perferendis suscipit in provident quos tempora quam, nulla harum quo accusantium dolorem corporis optio ratione minima delectus!</p>
            <button className='btn btn-danger' onClick={handleClick}>X</button>
        </div>
    </div>
  )
}

export default Modal