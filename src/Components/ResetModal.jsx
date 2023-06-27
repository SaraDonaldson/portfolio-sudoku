import React from 'react'

function ResetModal() {
  return (
    <div className='inner-reset-modal'>
        <button className="exit-modal-btn">x</button>
        <h3> Are you sure you want to reset the game?</h3>
        <button className='yes-reset-btn'>Yes</button>
        <button className='no-reset-btn'>No</button>



    </div>
  )
}

export default ResetModal