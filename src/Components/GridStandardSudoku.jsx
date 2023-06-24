import React, { useState }  from "react";
import Tiles from "./Tiles";


function GridStandardSudoku({dataObject,handleSetBothAxis, cluesArray,incorrectTiles, activateCheck}) {
      // handleSetXAxiscb2, handleSetYAxiscb2,
  const [changeVal, setChangeVal] = useState(false)
  const [selectedXAxis, setSelectedXAxis] = useState(false)
  const [selectedYAxis, setSelectedYAxis] = useState(false)
  
  
  
  
      return(
        
          <div className="standard-sudoku-grid-container">
  
              <div className="standard-grid" key={dataObject.id}>          
        
           {dataObject && dataObject.map((arr, xAxis)  => {
  
               return arr.map((val, yAxis) => 
                  <Tiles
                  // key={Math.random() + xAxis}
                  key={ xAxis.toString()+ yAxis.toString()}
                  handleSetBothAxis={handleSetBothAxis}
                  selectedXAxis={selectedXAxis} 
                  selectedYAxis ={selectedYAxis}
                  setSelectedXAxis= {setSelectedXAxis}
                  setSelectedYAxis={setSelectedYAxis}
                  tileValue= {val}
                  xAxis= {xAxis}
                  yAxis={yAxis}
                  changeVal= {changeVal}
                  setChangeVal = {setChangeVal}
                  cluesArray= {cluesArray}
                  incorrectTiles={incorrectTiles}
                  activateCheck={activateCheck}
                  />
                  
                  )
                  
              }
               
                  
              
               )}
               </div>
  
               
       </div>
      );
  }

export default GridStandardSudoku