import React from "react";
import { useState } from "react";

function SortingVisualizer() {
  const [numbers, setNumbers] = useState([5, 4, 3, 2, 1]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  async function sortNumbers() {
    // Perform sorting algorithm here...
    function wait(milliseconds) {
      return new Promise((resolve) =>
        setTimeout(() => resolve(), milliseconds)
      );
    }
    let nums = [...numbers];
    setIsButtonDisabled(true);
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          await wait(300);
          setNumbers([...nums]);
        }
      }
    }
    await wait(100);
    setIsButtonDisabled(false);
  }

  const randomiseNumbers = () => {
    let lengthOfNewArray = Math.floor(Math.random() * 10 + 1);
    const temp = [];
    for (let i = 0; i < lengthOfNewArray; i++) {
      const newRandomNumber = Math.floor(Math.random() * 10 + 1);
      temp.push(newRandomNumber);
    }
    setNumbers(temp);
  };

  return (
    <div className="main">
        <div className="sortDiv">
        <h2>Bubble Sort</h2>
          {numbers.map((number, index) => (
            <div
              className='bars'
              key={index}
              style={{
                width: `${number * 20}px`,
              }}
            />
          ))}
          
        </div>

        <div className="customDiv">
          <h2>Customize</h2>
          <label htmlFor="algo">Choose Sorting Algorithm</label>
          <select name="algo" id="algo">
              <option value="bubble">Bubble</option>
              <option value="selection">Selection</option>
              <option value="merge">Merge</option>
          </select>    
          
          <label htmlFor="speed">Adjust the Speed</label>
          <input type="range" min="1" max="100" className="slider"/>

            <div className="orderDiv">
            <input type="checkbox" id="order"> 
                      </input>
                      <label htmlFor="order"> Decreasing Order </label>
            </div>
      

          <div style={{ display: "flex" }} className="btn-container">
            <button
              disabled={isButtonDisabled}
              onClick={sortNumbers}
              style={{ width: "130px", marginRight: "10px" }}
            >
              Sort Numbers
            </button>
            <button disabled={isButtonDisabled} onClick={randomiseNumbers}>
              {" "}
              Randomise Numbers
            </button>
          </div>
        </div>
    </div>
  );
}

export default SortingVisualizer;