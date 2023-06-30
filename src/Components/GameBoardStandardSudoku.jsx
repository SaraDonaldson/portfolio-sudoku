import React from 'react';
import { useEffect, useState } from "react";
import "../StyleSheets/standardsudoku.css";
import GridStandardSudoku from './GridStandardSudoku';
import ButtonPanelStandardSudoku from './ButtonPanelStandardSudoku';
import data from '../puzzleData.json';
import ResetModal from './ResetModal';
import YouWinModal from './YouWinModal';




function GameBoardStandardSudoku() {
    let cluesArray = handleClues();
    let [objectX, setObjectX] =useState();
    let [objectY, setObjectY] =useState();
    let [activateCheck, setActivateCheck] =useState(false);
    let [incorrectTiles, setIncorrectTiles] =useState([]);
    let [startData, setStartData] = useState(data.startData);
    let [solutionData, setSolutionData] = useState(data.solutionData);
    let [userGame, setUserGame] = useState([])
    let [game, setGame] = useState([]);
    let [resetGame, setResetGame]= useState(false);
    const [resetModalBtn, setResetModalBtn]= useState (false);
    const [winnerModalBtn, setWinnerModalBtn]= useState (false);
   
   


    useEffect(() => {
        getPuzzleData();
      }, []);
      
    


 function getPuzzleData(){
        console.log("data: ", data);
    //    setStartData(data.startData);
    //    setSolutionData(data.solutionData);
        setUserGame(data.userGame);
        setGame([...data.userGame]);
    
    }



    function handleSetBothAxis(xAxis, yAxis){
        setObjectY(yAxis);
        setObjectX(xAxis);
     //    setActivateCheck(false);
     }

    async function editTile (val){
       setUserGame(game);
       let tempGame = [...userGame];
        console.log("edit tile started");
        console.log("x axis: ", objectX);
        console.log("y axis: ", objectY);
          if (startData[objectX][objectY] <= 0){
              tempGame[objectX][objectY] = val;
         }
         console.log("startData: ", startData);
         console.log("userGame: ", userGame);
         setGame(tempGame);
         setUserGame(tempGame);
         checkIfWon()
          setActivateCheck(false);
         };



         function handleClues() {
            let initialClues= [];
            let xcount= 0;
            let ycount= 0;
            let dataKey= [...data.startData];
        
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



        function checkIfWon(){
            let possibleWinner= game;

            console.log("check if won function started");
            if (game === solutionData){
            console.log("Everything is correct!");
                setWinnerModalBtn(true);
         }  
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
        setWinnerModalBtn(true);
     } 
    else{ 
        for(let i= 0; i <= 8; i++){
            for(let j=0; j<= 8; j++){
            if (userKey[i][j] !== 0 && solutionKey[i][j] !== userKey[i][j]){
                let xstring = i.toString();
                let ystring = j.toString();
                incorrectAnswers.push(xstring+ystring);
            } else if (solutionKey[i][j] === userKey[i][j]){
                correct+=1;
            }   
            }  
        }   if (correct.length === 81){
            console.log("Everything is correct!");
            setWinnerModalBtn(true);
        }
         console.log("number of correct answers:", correct);
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
        console.log("startData", startData[objectX][objectY]);
        console.log("game Data", game[objectX][objectY]);
        console.log("userGame", userGame[objectX][objectY]);
        userGame = game; 
        if (startData[objectX][objectY] === 0){
            userGame[objectX][objectY] = 0;
       }
              setGame(userGame);
              setActivateCheck(false);
         }
    
    function resetBoard (){
        setResetModalBtn(true);
        let tempGame = userGame;
        let xcount= 0;
        let ycount= 0;
        let dataKey= [...data.startData];
    
        for (let i of dataKey){
            for (let j of i){
            if(xcount <= dataKey.length){
                    let val= dataKey[xcount][ycount];
            if ( val === 0){
            let xstring = xcount.toString();
            let ystring = ycount.toString();           
            tempGame[xcount][ycount]= 0;
            console.log("temp game: ", tempGame);               
        }  ycount+=1;
            }
        } xcount += 1; 
        ycount = 0;  
    } 
           checkGame();
           setGame(tempGame);
           setUserGame(tempGame);
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

        <div className="reset-modal">
            <ResetModal
            trigger= {resetModalBtn} 
            setTrigger={setResetModalBtn}
            >
            </ResetModal>
      </div>

      <div className="winner-modal">
            <YouWinModal
            trigger= {winnerModalBtn} 
            setTrigger={setWinnerModalBtn}
            >
            </YouWinModal>
      </div>

    </div>
  )
}

export default GameBoardStandardSudoku