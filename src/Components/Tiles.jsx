import React,{useState, useEffect} from "react";

        function Tiles(
                    {
                    handleSetBothAxis,
                    selectedXAxis, 
                    selectedYAxis, 
                    setSelectedXAxis, 
                    setSelectedYAxis, 
                    tileValue, 
                    xAxis, yAxis, 
                    setChangeVal, 
                    changeVal, 
                    cluesArray,
                    incorrectTiles,
                    activateCheck
                    })
                    {


        let [currentTileVal,setCurrentTileVal]= useState(tileValue);
        let [isOriginalNumber,setIsOriginalNumber]= useState(false);
        let [checkNumbers, setCheckNumbers]= useState(activateCheck)
        let [isIncorrect, setIsIncorrect] = useState(false)
        let [sameAsSelected, setSameAsSelected]= useState(0);



            // useEffect(() => {
            // let axisString = (xAxis.toString() + yAxis.toString())
            // let answer =  cluesArray.includes(axisString)
            // setIsOriginalNumber(answer)
            // }, [])


            useEffect(() => {
            setCurrentTileVal(tileValue)
            }, [tileValue])

            useEffect(() => {
            if (activateCheck === false){
                setIsIncorrect(false);
            }else {
            let axisString = (xAxis.toString() + yAxis.toString())
            let answer =  incorrectTiles.includes(axisString)
            setIsIncorrect(answer)
            }
            }, [activateCheck, incorrectTiles, xAxis, yAxis])



            async function handleClick(){
            
            console.log("original number: ", isOriginalNumber)
                await setChangeVal(!changeVal);
                handleSetBothAxis(xAxis, yAxis)
                setSelectedXAxis(xAxis);
                setSelectedYAxis(yAxis);
                // setSameAsSelected(0);
                // setSameAsSelected(currentTileVal);
              }





    return(

        <button  className={`
                            tile 
                            ${(xAxis === selectedXAxis && yAxis === selectedYAxis ) && 'selected'} 
                            ${(xAxis === selectedXAxis || yAxis === selectedYAxis )&& 'highlight-axis'}
                            ${isOriginalNumber && 'original-nums'}
                            ${isIncorrect && 'incorrect-answer'}
                            ${(currentTileVal !== 0 & ! isOriginalNumber) && 'edited'} 
                            ${(xAxis === 2) && 'horizontal-divide'} 
                            ${(yAxis === 1 || yAxis === 3) && 'vertical-divide'} 
                            ${(currentTileVal ===1) && 'tile-one'} 
                            ${(currentTileVal ===2) && 'tile-two'} 
                            ${(currentTileVal ===3) && 'tile-three'} 
                            ${(currentTileVal ===4) && 'tile-four'} 
                            ${(currentTileVal ===5) && 'tile-five'}
                            ${(currentTileVal ===6) && 'tile-six'} 
                            ${(currentTileVal ===7) && 'tile-seven'} 
                            ${(currentTileVal ===8) && 'tile-eight'} 
                            ${(currentTileVal ===9) && 'tile-eight'} 
                            ${(sameAsSelected !==0 & sameAsSelected === currentTileVal) && 'selected-val'} 
                            `}
        onClick={() => {handleClick()}}>{currentTileVal === 0 ? "": currentTileVal}</button>
    
    )

}

export default Tiles