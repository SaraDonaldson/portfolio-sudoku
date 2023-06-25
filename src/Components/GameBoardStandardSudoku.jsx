import React from 'react';
import { useEffect, useState } from "react";
import "../StyleSheets/standardsudoku.css";
import GridStandardSudoku from './GridStandardSudoku';
import ButtonPanelStandardSudoku from './ButtonPanelStandardSudoku';
import data from '../puzzleData.json';




function GameBoardStandardSudoku() {
    // let cluesArray = handleClues();
    let [objectX, setObjectX] =useState();
    let [objectY, setObjectY] =useState();
    let [activateCheck, setActivateCheck] =useState(false);
    let [incorrectTiles, setIncorrectTiles] =useState([]);
    let [startData, setStartData] = useState([]);
    let [solutionData, setSolutionData] = useState([]);
    let [game, setGame] = useState([]);
    let [puzzleID, setPuzzleID] = useState();

    useEffect(() => {
        getPuzzleData();
      }, []);


    async function getPuzzleData(){
        console.log("data: ", data);
       await setStartData(data.startData);
       await setSolutionData(data.solutionData);
        setGame(data.startData);
    }

    function handleSetBothAxis(xAxis, yAxis){
        setObjectY(yAxis);
        setObjectX(xAxis);
     //    setActivateCheck(false);
     }

    async function editTile (val){
        console.log("edit tile started");
        console.log("x axis: ", objectX);
        console.log("y axis: ", objectY);
          if (startData[objectX][objectY] <= 0){
              game[objectX][objectY] = val;
         }
        //   checkIfWon();
          setActivateCheck(false);
         };

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
        //   cluesArray={cluesArray}
          incorrectTiles={incorrectTiles}
          activateCheck={activateCheck}
        />

        <div></div>

        <ButtonPanelStandardSudoku
        editTile ={editTile}
        />


        <div className="checking-buttons">
            <button type="button" onClick={(e)=>resetBoard()}>Reset Game</button>
            <button type="button" onClick={(e)=>checkGame()}>Check Answers</button>
            <button type="button" onClick={(e)=>deleteNumber()}>del</button>
        </div>

    </div>
  )
}

export default GameBoardStandardSudoku