import React from 'react'

function YouWinModal({
    trigger,
    setTrigger
}) {

    function handleReset(){

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

        <h3>You Won!</h3>
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

export default YouWinModal