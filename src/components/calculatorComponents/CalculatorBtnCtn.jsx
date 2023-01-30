import React from "react";
import CalculatorBtn from "./CalculatorBtn";
import style from "../../styles/calculatorStyles/calculatorBtnCtn.module.css";

function CalculatorBtnCtn({ buttonsArray, addBtnChar }) {
  return (
    <div className={style.CalculatorBtnCtn}>
      {buttonsArray.map((button) => {
        return (
          <CalculatorBtn
            key={button.char}
            buttonDetails={button}
            addBtnChar={addBtnChar}
          />
        );
      })}
    </div>
  );
}

export default CalculatorBtnCtn;
