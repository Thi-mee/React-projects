import { findByLabelText } from "@testing-library/react";
import React from "react";
import style from "../../styles/calculatorStyles/calculatorBtnCtn.module.css";

function CalculatorBtn({ buttonDetails: btn, addBtnChar }) {
  const handleClick = () => {
    if (btn.type === 'nc' || btn.type === 'op') {
      addBtnChar(btn);
    }
  };
  return (
    <span className={style.CalculatorBtn} onClick={handleClick}>
      {btn.char}
    </span>
  );
}

export default CalculatorBtn;
