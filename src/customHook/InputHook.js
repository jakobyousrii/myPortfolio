import { useState } from "react";


const InputHook = (checkValid)=>{
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const checkValidation = checkValid(inputValue);
    
    const onBlurHandler = ()=>{
        setIsTouched(true);
    }

    
    const onChangeHandler = (event)=>{
        setInputValue(event.target.value);
    }

    const onClearHandler = ()=>{
        setInputValue("");
        setIsTouched(false);
    }

    return {
        inputValue,
        onChangeHandler,
        onClearHandler,
        onBlurHandler,
        checkValidation,
        isTouched
    }
}

export default InputHook;