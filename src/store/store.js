import { createStore, combineReducers } from "redux";

function userSection(oldValue = [], newValue) {
    // switch (newValue.type) {
    //     case 'USER_ADD':
    //         oldValue.push(newValue.payload)

    //         break;
    //     case 'DELETE_USER':
    //         oldValue.splice(newValue.payload, 1)

    //     default:
    //         return [...oldValue]

    //         break;
    // }
    if (newValue.type === 'USER_ADD') {
        oldValue.push(newValue.payload);
    } else if (newValue.type === 'DELETE_USER') {
        oldValue.splice(newValue.payload, 1)
    }
    // localStorage.setItem('userSection', JSON.stringify(oldValue))
return [...oldValue]
}

let allSection = combineReducers({ userSection });
let mainStore = createStore(allSection, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default mainStore;