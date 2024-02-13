import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
const reducer = combineReducers({
    getProducts:getProductsReducer
})
const store = createStore(
  reducer,
  composeWithDevTools()
)