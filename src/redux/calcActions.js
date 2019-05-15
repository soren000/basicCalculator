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