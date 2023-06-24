import React from 'react';
import GridStandardSudoku from './GridStandardSudoku';
import ButtonPanelStandardSudoku from './ButtonPanelStandardSudoku';
import '../StyleSheets/standardsudoku.css';



function GameBoardStandardSudoku() {
  return (
    <div>
        <GridStandardSudoku/>
        <ButtonPanelStandardSudoku/>

    </div>
  )
}

export default GameBoardStandardSudoku