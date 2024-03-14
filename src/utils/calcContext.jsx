import {createContext, useContext, useReducer} from 'react';
import taskReducer, {initialState} from '../reducer/calcReducer.jsx';

const calcContext = createContext();


const calcConsumer = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    return [state, dispatch];
}

export const useCalcContext = () => {
    return useContext(calcContext);
}

const CalcContextProvider = ({children}) => {

    const value = calcConsumer();

    return <calcContext.Provider value={value}>
        {children}
    </calcContext.Provider>
}

export default CalcContextProvider