import React from 'react';
import "./index.css"
import { Button } from './Button';
import ResultScreen from './ResultScreen';
import { buttons } from '../constants/data';
import { useCalculator } from '../hooks/useCalculator';
const Calculator = () => {
    const {result,handleClear,handleClick,handleEqual} = useCalculator()
  return (
    <>
        <ResultScreen result={result} />
        {buttons.map((button, index) =>     
        <Button 
        key={button.text}
        text={button.text}
        value={button.value}
        method={button.text === "=" ? handleEqual : button.text === "Clear" ? handleClear: handleClick}
        index={index+1}
        />
        )}
    </>
  )
}

export default Calculator