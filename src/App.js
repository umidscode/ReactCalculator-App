import React, { useState } from "react";
import { evaluate} from "mathjs";
import './App.css';

// Functions Calculator
const App = () => {
    const [result, setResult] = useState(""); //hook useState returns a stateful value
    const touchClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clearAll = () => { // clear all function
        return setResult("");
    }
    const backspace = () => { // backspace function
        return setResult(result.slice(0,result.length -1))
    }
    const calculate = () => { // calculate function
        try {
            setResult(evaluate(result).toString())
        }
        catch(err) {
            setResult("Wrong Input")
        }
    }

    return (
        // Area of Calculator
        <div className="container">
            <form>
                <input type="text" value={result} />
            </form>
            <div className="touch-btn">
                <button onClick={clearAll} id="clearAll">Clear</button>
                <button onClick={backspace} id="backspace">C</button>
                    <button className="effect" name="/" onClick={touchClick}>&divide;</button>
                    <button name="7" onClick={touchClick}>7</button>
                    <button name="8" onClick={touchClick}>8</button>
                    <button name="9" onClick={touchClick}>9</button>
                    <button className="effect" name="*" onClick={touchClick}>&times;</button>
                    <button name="4" onClick={touchClick}>4</button>
                    <button name="5" onClick={touchClick}>5</button>
                    <button name="6" onClick={touchClick}>6</button>
                    <button className="effect" name="-" onClick={touchClick}>-</button>
                    <button name="1" onClick={touchClick}>1</button>
                    <button name="2" onClick={touchClick}>2</button>
                    <button name="3" onClick={touchClick}>3</button>
                    <button className="effect" name="+" onClick={touchClick}>+</button>
                    <button onClick={calculate} id="result">=</button>
                    <button name="0" onClick={touchClick}>0</button>
                    <button name="." onClick={touchClick}>.</button>
            </div>
        </div>
    );
}

export default App;
