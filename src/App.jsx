import './App.css'
import Result from './component/Result.jsx'
import Input from "./component/Input.jsx"
import { useCalcContext } from './utils/calcContext.jsx'

function App() {
    const [state, dispatch] = useCalcContext()

    const handleButtonClick = (value) => {
        if (value === '=') {
            dispatch({ type: 'calculate_result' });
        } else if (['+', '-', 'X'].includes(value)) {
            dispatch({ type: 'set_operation', payload: value });
        } else {
            const name = state.operation ? 'num2' : 'num1';
            dispatch({ type: 'set_value', payload: { name, value } });
        }
    };

    const renderNumericButtons = () => {
        const buttons = [];
        for (let i = 0; i <= 9; i++) {
            buttons.push(
                <Input key={i} value={i.toString()} changeValue={handleButtonClick} />
            );
        }
        return buttons;
    };

    return (
        <>
            <Result />
            <div>
                <div className="numpad">
                    {renderNumericButtons()}
                </div>
                <Input value="+" changeValue={handleButtonClick} />
                <Input value="-" changeValue={handleButtonClick} />
                <Input value="X" changeValue={handleButtonClick} />
                <Input value="=" changeValue={handleButtonClick} />
                <Input value="reset" changeValue={() => dispatch({ type: 'reset' })} />
            </div>
        </>
    );
}

export default App;