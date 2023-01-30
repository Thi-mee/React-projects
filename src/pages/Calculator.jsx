import React from "react";
import Portal from "../components/shared/Portal";
import CalculatorBtnCtn from "../components/calculatorComponents/CalculatorBtnCtn";
import style from "../styles/calculatorStyles/Calculator.module.css";

const OPTION1 = [
  { char: "C" },
  { char: "DEL" },
  { char: "%", type: "op" },
  { char: "÷", type: "op" },
  { char: "7", type: "nc" },
  { char: "8", type: "nc" },
  { char: "9", type: "nc" },
  { char: "×", type: "op" },
  { char: "4", type: "nc" },
  { char: "5", type: "nc" },
  { char: "6", type: "nc" },
  { char: "-", type: "op" },
  { char: "1", type: "nc" },
  { char: "2", type: "nc" },
  { char: "3", type: "nc" },
  { char: "+", type: "op" },
  { char: "▣" },
  { char: "0", type: "nc" },
  { char: ".", type: "nc" },
  { char: "=" },
];
const OPTION2 = [];

function Calculator() {
  const [buttons, setButtons] = React.useState(OPTION1);
  const [activeLine, setActiveLine] = React.useState("23+5");
  const [resultLine, setResultLine] = React.useState("= 28");
  const [isAdvancedCalc, setIsAdvancedCalc] = React.useState(false);

  React.useEffect(() => {
    setButtons(isAdvancedCalc ? OPTION2 : OPTION1);
  }, [isAdvancedCalc]);

  const getBtnBychar = (char) => {
    return buttons.find((btn) => btn.char === char);
  };
  const addDigitToActiveLine = (btnDet) => {
    const lastChar = activeLine.charAt(activeLine.length - 1);
    const prevBtn = getBtnBychar(lastChar);

    if (btnDet.type === 'op' && prevBtn.type === btnDet.type) {
      replaceLastDigit(btnDet.char);
    }
    else {
      setActiveLine(activeLine + btnDet.char);
    }
  };

  const replaceLastDigit = (char) => {
    let temp = activeLine.slice(0 , -1);
    temp += char
    setActiveLine(temp)
  }
  const delDigitFromActiveLine = () => {
    setActiveLine(activeLine.slice(0, -1));
  };

  const getResult = () => {};
  return (
    <Portal>
      <div className="container">
        <h1>Calculator</h1>
        <div className={style.Calculator}>
          <div className={style.Screen}>
            <div className={style.activeLine}>{activeLine}</div>
            <div className={style.resultLine}>{resultLine}</div>
          </div>
          <CalculatorBtnCtn
            buttonsArray={buttons}
            addBtnChar={addDigitToActiveLine}
          />
        </div>
      </div>
    </Portal>
  );
}

export default Calculator;
