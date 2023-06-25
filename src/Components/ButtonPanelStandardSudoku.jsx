import React from 'react'

function ButtonPanelStandardSudoku(editTile) {
  return (
    <div>ButtonPanelStandardSudoku



        <div className="input-buttons">
            <button type="button" className="button-one" onClick={(e)=>editTile(1)}>1</button>
            <button type="button" className="button-two" onClick={(e)=>editTile(2)}>2</button>
            <button type="button" className="button-three" onClick={(e)=>editTile(3)}>3</button>
            <button type="button" className="button-four" onClick={(e)=>editTile(4)}>4</button>
            <button type="button" className="button-five" onClick={(e)=>editTile(5)}>5</button>
            <button type="button" className="button-six" onClick={(e)=>editTile(6)}>6</button>
            <button type="button" className="button-four" onClick={(e)=>editTile(7)}>7</button>
            <button type="button" className="button-five" onClick={(e)=>editTile(8)}>8</button>
            <button type="button" className="button-six" onClick={(e)=>editTile(9)}>9</button>
        </div>

    </div>
  )
}

export default ButtonPanelStandardSudoku