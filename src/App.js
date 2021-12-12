import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {increment} from './actions'
import {incrementCPU} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const counterCPU = useSelector(state => state.counterCPU)
  const dispatch = useDispatch();
  const [userChoice, setChoice] = useState("");
  const [userScore, setUserScore] = useState(0); 
  const [cpuChoice, setCPUChoice] = useState("Nothing Yet...");
  const [cpuScore, setCPUScore] = useState(0); 

  function win(){
    setUserScore(userScore+1)
    dispatch(increment())
    if(userScore == 3){
      console.log("win")
    }
  }
  
  function lose(){
    setCPUScore(cpuScore+1)
    dispatch(incrementCPU())
    if(cpuScore == 3){
      console.log("win")
    }
  }

  function draw(){

  }

  function playGame(){
    console.log(userChoice )
    switch (userChoice + cpuChoice) {
      case "rocksci":
      case "paperrock":
      case "scipaper":
          win();
          break;
      case "rockpaper":
      case "papersci":
      case "scirock":
          lose();
          break;
      case "rockrock":
      case "paperpaper":
      case "scisci":
          draw();
          break;
  }
  }


  function functionCPUChoice () {
    const choices = ['rock', 'paper', 'sci'];
    const randomNumber = Math.floor(Math.random() * 3);
    setCPUChoice(choices[randomNumber])
    playGame()
  }

  const choice  = async (e) =>{
      await setChoice(e)
      functionCPUChoice()
  } 

  
  
  return (

<div>
      <div className='choices'>
        <div className='scoreGrid'>Human Score: {counter} </div>
        <div> The CPU Chose: {cpuChoice}</div>
        <div className='scoreGrid'>CPU Score: {counterCPU}</div>
      </div>

    <div className="App">
        <div className='choices'>
          <div className='choiceGrid' > <button onClick = {e => choice(e.target.id) } id ="rock">Rock</button></div>
          <div className='choiceGrid'><button onClick = { e => choice(e.target.id)} id = "paper">Paper</button></div>
          <div className='choiceGrid'><button onClick = {e => choice(e.target.id)} id = "sci">Scissors</button></div>  
        </div>  
    </div>

</div>
  );
}

export default App;
