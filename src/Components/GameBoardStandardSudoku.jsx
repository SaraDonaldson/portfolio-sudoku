import React from 'react';
import { useEffect, useState } from "react";
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
        setStartData(data.startData);
        console.log(startData);
        setSolutionData(data.solutionData);
        console.log(solutionData);
        setGame(data.startData);


    // fetch('./puzzleData.json'
    //     ,{
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }})
    //     .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //     setStartData(myJson.startData);
    //     console.log(startData);
    //     setSolutionData(myJson.solutionData);
    //     console.log(solutionData);
    //     setGame(myJson.startData);
    //      return myJson;  
    //       });
    }




    // function getBooks(){
    //     fetch('./books.json'
    //     ,{
    //       headers : { 
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //        }})
    //     .then(function(response){
    //         console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //         //  setBooks(myJson)
    //          setBooks(myJson.slice(0,20))
    //          return myJson.slice(0,20)
    //       });
    //     }

    function handleSetBothAxis(xAxis, yAxis){
        setObjectY(yAxis);
        setObjectX(xAxis);
     //    setActivateCheck(false);
     }

    // async function editTile (val){
    //     console.log("edit tile started");
    //     console.log("x axis: ", objectX);
    //     console.log("y axis: ", objectY);
    //       if (startData[objectX][objectY] <= 0){
    //           userData[objectX][objectY] = val;
    //      }
    //       checkIfWon();
    //       setActivateCheck(false);
    //      };

    // function checkGame (){
    //     let incorrectAnswers= [];
    //     let correct= 0;
    //     let solutionKey= solutionData;
    //     let userKey= userData;
    //     console.log("checkgame function started");
    //     if (solutionKey === userKey){
    //     console.log("Everything is correct!");
    //     //pause timer, save time
    //     //start Game is won function
    //  } 
    // else{ 
    //     for(let i= 0; i <= 5; i++){
    //         for(let j=0; j<= 5; j++){
    //         if (solutionKey[i][j] !== userKey[i][j]){
    //             let xstring = i.toString();
    //             let ystring = j.toString();
    //             incorrectAnswers.push(xstring+ystring);
    //         } else if (solutionKey[i][j] === userKey[i][j]){
    //             correct+=1;
    //         }   
    //         }  
    //     }    console.log("number of correct answers:", correct);
    //         console.log("number of incorrect answers:", incorrectAnswers.length);
    //         console.log("incorrect: ", incorrectAnswers);
    //         setIncorrectTiles(incorrectAnswers);
    //         setActivateCheck(true);
    //          return incorrectAnswers;



    // function deleteNumber(){
    //     console.log("del number started");
    //     console.log("x axis: ", objectX);
    //     console.log("y axis: ", objectY);
    //       if (startData[objectX][objectY] === 0){
    //           userData[objectX][objectY] = 0;}
    //           setActivateCheck(false);
    //      }
    
    // function resetBoard (){
    //    let initial= startData
    //    let user= userData;
    //    console.log("reset board function started");
     
    //    for(let i= 0; i <= 5; i++){
    //        for(let j=0; j<= 5; j++){
    //        if (initial[i][j] !== user[i][j]){
    //            user[i][j]=0;
    //        } } }  
    //        //reset timer  
    //        setActivateCheck(false);
    //     }


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
        <ButtonPanelStandardSudoku/>


        {/* <div className="checking-buttons">
            <button type="button" onClick={(e)=>resetBoard()}>Reset Game</button>
            <button type="button" onClick={(e)=>checkGame()}>Check Answers</button>
            <button type="button" onClick={(e)=>deleteNumber()}>del</button>
        </div> */}

    </div>
  )
}

export default GameBoardStandardSudoku