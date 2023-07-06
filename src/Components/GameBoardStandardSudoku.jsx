import React from 'react';
import { useEffect, useState } from "react";
import "../StyleSheets/standardsudoku.css";
import GridStandardSudoku from './GridStandardSudoku';
import ButtonPanelStandardSudoku from './ButtonPanelStandardSudoku';
import data from '../puzzleData.json';
import ResetModal from './ResetModal';
import YouWinModal from './YouWinModal';
import WaveBackground from './WaveBackground';
import SquaresBackground from './SquaresBackground';


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
  
   
   

    // render puzzle data
    useEffect(() => {
        getPuzzleData();
      }, []);
      


    // fetch from JSON file
    // fetch from DB by puzzle ID from menu (original)
    function getPuzzleData(){
            console.log("data: ", data);
            setUserGame(data.userGame);
            setGame([...data.userGame]);
        }

    // Identify current selected tile by array(x) and array index(y)
    // use in checking functions and pass as prop for conditional CSS
    function handleSetBothAxis(xAxis, yAxis){
        setObjectY(yAxis);
        setObjectX(xAxis);
     //    setActivateCheck(false);
     }

    // edit the selected tile as an array item (x and y are the array and index no)
    //If not an initial clue, save the entered value to the current game data array
    async function editTile (val){
        console.log('INPUT', val)
       setUserGame(game);
       let tempGame = [...userGame];
        console.log("edit tile started");
        console.log("x axis: ", objectX);
        console.log("y axis: ", objectY);
          if (startData[objectX][objectY] <= 0){
              tempGame[objectX][objectY] = val;
         }
         setGame(tempGame);
         setUserGame(tempGame);
         checkIfWon()
         setActivateCheck(false);
         };


        // saves the x and y axis of initial clues at the start of the game
        // to handle conditional css styling - pass as prop
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
        console.log("initial clues: ", initialClues)
            return initialClues
        }


      
        // compare solution array to game array by items
        // if count reaches 81, the game is won
        function checkIfWon(){
            let correct= 0;

            for(let i= 0; i <= 8; i++){
                for(let j=0; j<= 8; j++){
                if (solutionData[i][j] === userGame[i][j]){
                   correct += 1
                    }
                }
            } if (correct === 81){
                setWinnerModalBtn(true);
            }
        }

        

     // functions triggered by buttons
/* ---------------------------------------------- */

        
    function checkGame (){
        let incorrectAnswers= [];
        let correct= 0;
        let solutionKey= solutionData;
        let userKey= game;
        // console.log("checkgame function started", userKey);
     
    
        for(let i= 0; i <= 8; i++){
            for(let j=0; j<= 8; j++){
                // console.log('The solution and user key', solutionKey[i][j], userKey[i][j])
            if (userKey[i][j] !== 0 && solutionKey[i][j] !== userKey[i][j]){
                let xstring = i.toString();
                let ystring = j.toString();
                // console.log('The strings', xstring,ystring)
                incorrectAnswers.push(xstring+ystring);
            } else if (solutionKey[i][j] === userKey[i][j]){
                correct++;
            }   
            }
        }

            // console.log("number of correct answers:", correct);
            setIncorrectTiles(incorrectAnswers);
            setActivateCheck(true);
             return incorrectAnswers;   
        }

    //  Dead code
    // function deleteNumber(){
    //     console.log("del number started");
    //     console.log("x axis: ", objectX);
    //     console.log("y axis: ", objectY);
    //     console.log("startData", startData[objectX][objectY]);
    //     console.log("game Data", game[objectX][objectY]);
    //     console.log("userGame", userGame[objectX][objectY]);
    //     userGame = game; 
    //     if (startData[objectX][objectY] === 0){
    //         userGame[objectX][objectY] = 0;
    //    }
    //           setGame(userGame);
    //           setActivateCheck(false);
    //      }
    
    function resetBoard (){
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

    function toggleResetBoardModal(){
        setResetModalBtn(true);
    }


  return (
    <div className='game-board-standard'>
        <GridStandardSudoku
          handleSetBothAxis={handleSetBothAxis}
          dataObject={game}
          cluesArray={cluesArray}
          incorrectTiles={incorrectTiles}
          activateCheck={activateCheck}
          editTile={editTile}
        />

    
<div className="button-container">
<div className="input-buttons" >
            <button type="button" className="button-one" onClick={()=>editTile(1)}>1</button>
            <button type="button" className="button-two" onClick={()=>editTile(2)}>2</button>
            <button type="button" className="button-three" onClick={()=>editTile(3)}>3</button>
            <button type="button" className="button-four" onClick={()=>editTile(4)}>4</button>
            <button type="button" className="button-five" onClick={()=>editTile(5)}>5</button>
            <button type="button" className="button-six" onClick={()=>editTile(6)}>6</button>
            <button type="button" className="button-seven" onClick={()=>editTile(7)}>7</button>
            <button type="button" className="button-eight" onClick={()=>editTile(8)}>8</button>
            <button type="button" className="button-nine" onClick={()=>editTile(9)}>9</button>
        </div> 

        <div className="checking-buttons">
            <button type="button" onClick={(e)=>toggleResetBoardModal()}>Reset Game</button>
            <button type="button" onClick={(e)=>checkGame()}>Check Answers</button>
            <button type="button" onClick={(e)=> editTile(0)}>del</button>
        </div>
</div>

        <div className="reset-modal">
            <ResetModal
            resetBoard={resetBoard}
            trigger= {resetModalBtn}
            setTrigger={setResetModalBtn}
            />
      </div>

      <div className="winner-modal">
            <YouWinModal
            trigger= {winnerModalBtn} 
            setTrigger={setWinnerModalBtn}
            >
            </YouWinModal>
      </div>

      {/* <WaveBackground/> */}
      <SquaresBackground/>

    </div>
  )
}

export default GameBoardStandardSudoku