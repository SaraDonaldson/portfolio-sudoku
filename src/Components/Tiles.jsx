import React,{useState, useEffect} from "react";

        function Tiles(
                    {
                    editTile,
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



            useEffect(() => {
            let axisString = (xAxis.toString() + yAxis.toString())
            let answer = cluesArray.includes(axisString)
            setIsOriginalNumber(answer)
            }, [])


            useEffect(() => {
            setCurrentTileVal(tileValue)
            }, [tileValue])

            useEffect(() => {
            // if (activateCheck === false){
            //     setIsIncorrect(false);
            // }else {
            // let axisString = (xAxis.toString() + yAxis.toString())
            // let answer =  incorrectTiles.includes(axisString)
            // setIsIncorrect(answer)
            // }
            let axisString = (xAxis.toString() + yAxis.toString())
            // console.log('The incorrect tiles', axisString)
            let answer = incorrectTiles.includes(axisString)
            // console.log('Checking is incorrect', answer)
            setIsIncorrect(answer)
            }, [activateCheck, incorrectTiles, xAxis, yAxis])



            async function handleClick(){
            
            // console.log("original number: ", isOriginalNumber)
                await setChangeVal(!changeVal);
                handleSetBothAxis(xAxis, yAxis)
                setSelectedXAxis(xAxis);
                setSelectedYAxis(yAxis);
                // setSameAsSelected(0);
                // setSameAsSelected(currentTileVal);
              }


    function handleInputChange(e){
        console.log(e)
        e.preventDefault()
        let currentValue=parseInt(e.nativeEvent.data)
        console.log(currentValue)
        if(currentValue > 0 && currentValue < 10){
            editTile(currentValue)
        } else {
            editTile(0)
        }
    }


    return(

        <button  className={`
                            tile 
                            ${(xAxis === selectedXAxis && yAxis === selectedYAxis && !isOriginalNumber) && 'selected'} 
                            ${(xAxis === selectedXAxis || yAxis === selectedYAxis )&& 'highlight-axis'}
                            ${isOriginalNumber && 'original-nums'}
                            ${(currentTileVal !== 0 & ! isOriginalNumber) && 'edited'} 
                            ${(xAxis === 2 || xAxis === 5) && 'horizontal-divide'} 
                            ${(yAxis === 2 || yAxis === 5) && 'vertical-divide'} 
                            ${(currentTileVal ===1) && 'tile-one'} 
                            ${(currentTileVal ===2) && 'tile-two'} 
                            ${(currentTileVal ===3) && 'tile-three'} 
                            ${(currentTileVal ===4) && 'tile-four'} 
                            ${(currentTileVal ===5) && 'tile-five'}
                            ${(currentTileVal ===6) && 'tile-six'} 
                            ${(currentTileVal ===7) && 'tile-seven'} 
                            ${(currentTileVal ===8) && 'tile-eight'} 
                            ${(currentTileVal ===9) && 'tile-nine'} 
                            ${(sameAsSelected !==0 & sameAsSelected === currentTileVal) && 'selected-val'} 
                            `}
                            onClick={() => {handleClick()}}>
                                
                                <input type='number'  onKeyDown={(e) =>["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()} className={`
                            tile-input
                            ${(xAxis === selectedXAxis && yAxis === selectedYAxis && !isOriginalNumber) && 'selected'} 
                            ${isIncorrect && ' incorrect-answer '}
                            `} 
                            max={'9'}
                            min={'0'}
                style={{backgroundColor:"transparent", border:'0px solid black', width:'100%', height:'100%'}}
                            disabled={isOriginalNumber}
                            onChange={handleInputChange}
                            pattern="[0-9]*"
        value={currentTileVal === 0 ? "": currentTileVal}/>
        </button>
    
    )

}

export default Tiles