import './App.css';
import Card from './Components/Card/card';
import Button from './Components/Button/button';
import Input from './Components/Input/input';
import ToggleSwitch from './Components/ToggleSwitch/toggle-switch';
import Counter from './Components/Counter/counter';
import React, {useState} from 'react';

function App() {

  const [passOne, setPassOne] = useState("");
  const [passTwo, setPassTwo] = useState("");
  const [letters, setLetters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [count, setCount] = useState(8);

  const handleDecrement = ()=>{
      if(count > 5){
          setCount(prevCount => prevCount - 1)
      }
  }

  const handleIncrement = ()=>{
      if(count < 20){
          setCount(prevCount => prevCount + 1);
      }
  }

  const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


  const handleCheckLetters = (e)=>{
    setLetters(e.target.checked);
  }
  const handleCheckNumbers = (e)=>{
    setNumbers(e.target.checked);
  }

  const randomPass = () => {
    let newPass=[];
    let tempCharacters = []
  
    if (!letters && numbers){
     tempCharacters = characters.slice(52, characters.length);
    } else if (!numbers && letters){
      tempCharacters = characters.slice(0,51) + "," + characters.slice(62, characters.length);
    } else if (!numbers && !letters){
      tempCharacters = characters.slice(62, characters.length);
    } else {
      tempCharacters = tempCharacters.concat(characters);
    }

    for (let i = 0; i < count; i++){
      newPass.push(tempCharacters[Math.floor(Math.random() * tempCharacters.length)]);
    }

    return newPass;
  }
  const handlePassGen = () => {
      setPassOne(randomPass());
      setPassTwo(randomPass());
  }

  const handleCopyText = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
  }

  return (
      <div id="App">
        <Card>
            <header>
              <strong className="white">Generate a</strong>
              <br></br>
              <strong className="green">random password</strong>
            </header>
            <span className="subheading">Never Use an insecure password again.</span>
            <div className="flex-row">
              <div className="flex-column">
                <Button action={handlePassGen} content="Generate passwords"></Button>
                <Counter increment={handleIncrement} decrement={handleDecrement} charCount={count}></Counter>
              </div>
              <div className="flex-column">
                <ToggleSwitch check={handleCheckNumbers} label="Include Numbers" ></ToggleSwitch>
                <ToggleSwitch check={handleCheckLetters} label="Include Letters"></ToggleSwitch>
              </div>
            </div>
            <div className="border"></div>
            <div className="flex-row">
              <Input content={passOne} copy={handleCopyText}></Input>
              <Input content={passTwo} copy={handleCopyText}></Input>
            </div>
        </Card>
      </div>
  );
}

export default App;
