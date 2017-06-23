import {createStore, applyMiddleware, combineReducers} from 'redux';

import reactTeamReducer from '../modules/react-team';
import gridReducer from '../modules/grid';

let reducers = combineReducers({reactTeam: reactTeamReducer, grid: gridReducer});

import rootSaga from './react-team-saga';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export default function makeStore() {
    const store = createStore(reducers, composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));

    sagaMiddleware.run(rootSaga);
    return store;
}
