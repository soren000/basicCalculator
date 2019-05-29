import database from '../firebase/firebase';

export const numberInput = ( { value = '' } = {} )  => (
    {
        type: 'NUMBER',
        value: value
    }
)

export const operationInput = ( { value = ''} = {} ) => (
    {
        type: 'OPERATION',
        value: value
    }
)

export const clearEntry = () => (
    {
        type: 'CLEAR_ENTRY',
    }
)

export const clearAll = () => (
    {
        type: 'CLEAR_ALL'
    }
)

export const submitFeedback = ( value = '' ) => (
    {
        type: 'SUBMIT_FEEDBACK',
        value: value
    }
)

export const startSubmitFeedback = (feedbackData = "") => {
    return (dispatch) => {
        const feedback = { feedbackData }
        
        database.ref('feedback').push(feedback).then((ref) => {
            dispatch(submitFeedback(feedbackData))
        });
    };
};

export const setFeedback = (feedback) => (
    {
        type: 'SET_FEEDBACK',
        feedback
    }
);

export const startSetFeedback = () => {
    return (dispatch) => {
        return database.ref('feedback').once('value').then((snapshot) => {
            let feedbackArray = [];
            snapshot.forEach((childSnapshot) => {
                feedbackArray.push(childSnapshot.val());
            })
            
            dispatch(setFeedback(feedbackArray))
        })
    }
}