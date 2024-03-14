export const initialState = {
    num1: '',
    num2: '',
    result: '',
    operation: '',
};

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case 'X':
            return parseFloat(num1) * parseFloat(num2);
        default:
            return 0;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'set_value':
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: state[name] + value,
                result: state.result + value,
            };

        case 'set_operation':
            const { payload: operator } = action;
            return {
                ...state,
                result: state.result + operator,
                operation: operator,
            };

        case 'calculate_result':
            case 'calculate_result':
                const result = calculateResult(state.num1, state.num2, state.operation);
                return {
                    ...state,
                result,
                num1: result,
                num2: 0
            };

        case 'reset':
            return initialState;

        default:
            return state;
    }
};

export default reducer;