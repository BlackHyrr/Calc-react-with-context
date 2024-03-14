import { useCalcContext } from "../utils/calcContext";

const Result = () => {
    const [state,_] = useCalcContext()
    const result = state.result;

    return (
        <div className="display">
            {result}
        </div>
    )
}

export default Result;