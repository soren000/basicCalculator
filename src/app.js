import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';

import AppRouter from './routers/AppRouter';

import configureStore from './redux/configureStore';


const store = configureStore();
// const state = store.getState();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(
    jsx,
    document.getElementById('app')
);

// const array = [
//     [7, 4, 2],
//     ["+"],
//     [5, 9, 4]
// ]
// let newArray = [];
// array.forEach((x) => {
//     newArray = [
//         ...newArray,
//         x.join('')
//     ]
// });
// const higherPriorityOperations = ["*", "/"];
// const lowerPriorityOperations = ["+", "-"]
// for (let i = 0; i < newArray.length; i++) {
//     const indexValue = newArray[i];
//     // if () {

//     // }
// }
// // console.log(newArray);

// console.log(eval("(5+2)*6+3"));

const array = [7,4,2];
const arrayNew = array;
arrayNew.pop(arrayNew.length)
console.log(array);