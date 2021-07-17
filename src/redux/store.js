import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import watchGetAllCourses from './Table/table.saga';

const sagaMiddleware=createSagaMiddleware();
const middlewares=[logger,sagaMiddleware];

export const store=createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(watchGetAllCourses);

export default store; 