import { useState } from "react";


//Version solo para las tasks

export function useLocalStorage (initialValue){

const key = "task";

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            return initialValue;
        }
    
    
    
    });
    
    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch(error){
            console.log(error);
        }
    }
    
    return [storedValue, setValue];
    
    }

//Version reutilizable

/*export function useLocalStorage (key, initialValue){
const [storedValue, setStoredValue] = useState(() => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    }
    catch (error) {
        return initialValue;
    }



});

const setValue = value => {
    try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    catch(error){
        console.log(error);
    }
}

return [storedValue, setValue];

}*/