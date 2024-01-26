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

        <h3 className='you-won-txt'>You Won!</h3>
        <div className='modal-select-btns-cont'>

        </div>
    </div>

    </div>
    </div>
  ) : "";
}

export default YouWinModal