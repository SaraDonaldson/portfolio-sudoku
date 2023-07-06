import React from 'react'

function ResetModal({
  resetBoard,
    trigger,
    setTrigger
}) {

    function handleReset(){
      resetBoard()
        setTrigger(false)
    }


  return (trigger) ? (
    <div className='Overlay' onClick={()=> setTrigger(false)}>
    <div className='outer-reset-modal'>

    <div className='inner-reset-modal' onClick={(e)=> {e.stopPropagation()}}>
        
        <button 
        className="exit-modal-btn"
        onClick={()=> setTrigger(false)}
        >x</button>

        <h3> Are you sure you want to reset?</h3>
        <div className='modal-select-btns-cont'>
        <button 
        className='yes-reset-btn'
        onClick={()=> handleReset()}
        >Reset</button>
        <button 
        className='no-reset-btn'
        onClick={()=> setTrigger(false)}
        >exit</button>
        </div>
    </div>

    </div>
    </div>
  ) : "";
}

export default ResetModal