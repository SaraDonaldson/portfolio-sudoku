import React from 'react';
import { useEffect, useState } from "react";
import "../StyleSheets/standardsudoku.css";
import GridStandardSudoku from './GridStandardSudoku';
import ButtonPanelStandardSudoku from './ButtonPanelStandardSudoku';
import data from '../puzzleData.json';




function GameBoardStandardSudoku() {
    let cluesArray = handleClues();
    let [objectX, setObjectX] =useState();
    let [objectY, setObjectY] =useState();
    let [activateCheck, setActivateCheck] =useState(false);
    let [incorrectTiles, setIncorrectTiles] =useState([]);
    let [startData, setStartData] = useState(data.startData);
    let [solutionData, setSolutionData] = useState(data.solutionData);
    let [game, setGame] = useState([]);
    let userGame = [];


    useEffect(() => {
        getPuzzleData();
      }, []);


    async function getPuzzleData(){
        console.log("data: ", data);
    //    setStartData(data.startData);
    //    setSolutionData(data.solutionData);
        setGame(data.startData);
        userGame =data.startData;
    }

    function handleSetBothAxis(xAxis, yAxis){
        setObjectY(yAxis);
        setObjectX(xAxis);
     //    setActivateCheck(false);
     }

    async function editTile (val){
        userGame= game;
        console.log("edit tile started");
        console.log("x axis: ", objectX);
        console.log("y axis: ", objectY);
          if (startData[objectX][objectY] <= 0){
              userGame[objectX][objectY] = val;
         }
         setGame(userGame);
        //   checkIfWon();
          setActivateCheck(false);
         };



         function handleClues() {
            let initialClues= [];
            let xcount= 0;
            let ycount= 0;
            let dataKey= data.startData;
        
            for (let i of dataKey){
                for (let j of i){
                if(xcount <= dataKey.length){
                        let val= dataKey[xcount][ycount];
                if ( val !== 0){
                let xstring = xcount.toString();
                let ystring = ycount.toString();           
                    initialClues.push(xstring+ystring);
                    }  ycount+=1;
                }
            } xcount += 1; 
            ycount = 0;  
        }   
            return initialClues
        }


     // Checking buttons Panel funtions
/* ---------------------------------------------- */

        
    function checkGame (){
        let incorrectAnswers= [];
        let correct= 0;
        let solutionKey= solutionData;
        let userKey= game;
        console.log("checkgame function started");
        if (solutionKey === userKey){
        console.log("Everything is correct!");
        //pause timer, save time
        //start Game is won function
     } 
    else{ 
        for(let i= 0; i <= 5; i++){
            for(let j=0; j<= 5; j++){
            if (solutionKey[i][j] !== userKey[i][j]){
                let xstring = i.toString();
                let ystring = j.toString();
                incorrectAnswers.push(xstring+ystring);
            } else if (solutionKey[i][j] === userKey[i][j]){
                correct+=1;
            }   
            }  
        }    console.log("number of correct answers:", correct);
            console.log("number of incorrect answers:", incorrectAnswers.length);
            console.log("incorrect: ", incorrectAnswers);
            setIncorrectTiles(incorrectAnswers);
            setActivateCheck(true);
             return incorrectAnswers;
            }
        }


    function deleteNumber(){
        console.log("del number started");
        console.log("x axis: ", objectX);
        console.log("y axis: ", objectY);
          if (startData[objectX][objectY] === 0){
              game[objectX][objectY] = 0;}
              setActivateCheck(false);
         }
    
    function resetBoard (){
       let initial= startData
       let user= game;
       console.log("reset board function started");
     
       for(let i= 0; i <= 5; i++){
           for(let j=0; j<= 5; j++){
           if (initial[i][j] !== user[i][j]){
               user[i][j]=0;
           } } }  
           //reset timer  
           setActivateCheck(false);
        }


  return (
    <div>
      
    
        <GridStandardSudoku
          handleSetBothAxis={handleSetBothAxis}
          dataObject={game}
          // handleSetXAxiscb2 = {handleSetXAxis2}
          // handleSetYAxiscb2 = {handleSetYAxis2}
          cluesArray={cluesArray}
          incorrectTiles={incorrectTiles}
          activateCheck={activateCheck}
        />

        <div></div>

        {/* <ButtonPanelStandardSudoku
        editTile={editTile}
        /> */}

<div className="input-buttons">

            <button type="button" className="button-one" onClick={(e)=>editTile(1)}>1</button>
            <button type="button" className="button-two" onClick={(e)=>editTile(2)}>2</button>
            <button type="button" className="button-three" onClick={(e)=>editTile(3)}>3</button>
            <button type="button" className="button-four" onClick={(e)=>editTile(4)}>4</button>
            <button type="button" className="button-five" onClick={(e)=>editTile(5)}>5</button>
            <button type="button" className="button-six" onClick={(e)=>editTile(6)}>6</button>
            <button type="button" className="button-seven" onClick={(e)=>editTile(7)}>7</button>
            <button type="button" className="button-eight" onClick={(e)=>editTile(8)}>8</button>
            <button type="button" className="button-nine" onClick={(e)=>editTile(9)}>9</button>
        </div> 

        <div className="checking-buttons">
            <button type="button" onClick={(e)=>resetBoard()}>Reset Game</button>
            <button type="button" onClick={(e)=>checkGame()}>Check Answers</button>
            <button type="button" onClick={(e)=>deleteNumber()}>del</button>
        </div>

    </div>
  )
}

export default GameBoardStandardSudoku