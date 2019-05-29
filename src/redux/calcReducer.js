const defaultState = {
    lastInput: undefined,
    currentEntry: [],
    error: undefined,
    lastResult: undefined,
    feedback: [],
    get total() {
        return "asd";
    }
}

const calcReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FEEDBACK':
            
            return {
                ...state,
                feedback: action.feedback
            }
        case 'SUBMIT_FEEDBACK':

            return {
                ...state,
                feedback: state.feedback.concat({text: action.value})
            }
        case 'CLEAR_ENTRY':
            let currentEntryNew = state.currentEntry;
            currentEntryNew = currentEntryNew.slice(0, currentEntryNew.length-1);
            return {
                ...state,
                currentEntry: currentEntryNew
            }
        case 'CLEAR_ALL' :
            return {
                ...defaultState
            }
        case 'NUMBER':
            return {
                ...state,
                error: undefined,
                lastInput: "NUMBER",
                currentEntry: [
                    ...state.currentEntry,
                    action.value
                ]
            }

        case 'OPERATION':
            if (state.lastInput === "OPERATION") {
                return {
                    ...state,
                    error: "Invalid input"
                }
            }
            else {
                if (action.value === "Ans") {
                    try {
                        const result = eval(state.currentEntry.join(''));
                        return {
                            ...state,
                            lastInput: undefined,
                            lastResult: result,
                            currentEntry: [],
                            error: undefined
                        }
                    }
                    catch(e) {
                        return {
                            ...state,
                            error: "Invalid input"
                        }
                    }
                }
                return {
                    ...state,
                    error: undefined,
                    lastInput: "OPERATION",
                    currentEntry: [
                        ...state.currentEntry,
                        action.value
                    ]
                };
            }

        default:
            return state;
    }
}

export default calcReducer;