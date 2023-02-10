import { useState } from "react"
export const useCalculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (event) => {
        setResult(result + event.target.value);
    };

    const handleEqual = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const handleClear = () => {
        setResult("");
    };
    return { result, handleClick, handleEqual, handleClear }
}