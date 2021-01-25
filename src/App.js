import './App.css';
//import {Main} from './tst/pages'
import {Airport} from './air/pages'
import {airportReducer} from './air/pages/Airport'
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({airportReducer})

function App() {
  return (
    <Provider store={createStore(rootReducer,applyMiddleware(thunk))}>
      <Airport/>
    </Provider>
  );
}

export default App;
